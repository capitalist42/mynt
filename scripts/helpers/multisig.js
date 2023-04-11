import Logs from "node-logs";

const logger = new Logs().showInConsole(true);

export const isMultisigOwner = async (multisigAddress, checkAddress) => {
    const { ethers } = hre;
    const multisig = await ethers.getContractAt("MultiSigWallet", multisigAddress);
    return await multisig.isOwner(checkAddress);
};

export const multisigAddOwner = async (addAddress, sender) => {
    const {
        ethers,
        getNamedAccounts,
        deployments: { get },
    } = hre;
    const multisigDeployment = await get("MultiSigWallet");
    let multisigInterface = new ethers.utils.Interface(multisigDeployment.abi);
    let data = multisigInterface.encodeFunctionData("addOwner", [addAddress]);
    ///@todo check if the deployer is one of ms owners
    console.log(`creating multisig tx to add new owner ${addAddress}...`);
    await sendWithMultisig(multisigDeployment.address, multisigDeployment.address, data, sender);
    logger.info(
        `>>> DONE. Requires Multisig (${multisigDeployment.address}) signing to execute tx <<<`
    );
};

export const multisigRemoveOwner = async (removeAddress, sender) => {
    const {
        ethers,
        getNamedAccounts,
        deployments: { get },
    } = hre;
    const multisigDeployment = await get("MultiSigWallet");
    let multisigInterface = new ethers.utils.Interface(multisigDeployment.abi);
    let data = multisigInterface.encodeFunctionData("removeOwner", [removeAddress]);
    console.log(`creating multisig tx to remove owner ${removeAddress}...`);
    await sendWithMultisig(multisigDeployment.address, multisigDeployment.address, data, sender);
    logger.info(
        `>>> DONE. Requires Multisig (${multisigDeployment.address}) signing to execute tx <<<`
    );
};

export const sendWithMultisig = async (
    multisigAddress,
    contractAddress,
    data,
    sender,
    value = 0
) => {
    const { ethers } = hre;
    const signer = await ethers.getSigner(sender);
    const multisig = await ethers.getContractAt("MultiSigWallet", multisigAddress, signer);
    const gasEstimated = (
        await multisig.estimateGas.submitTransaction(contractAddress, value, data)
    ).toNumber();
    receipt = await (
        await multisig.submitTransaction(contractAddress, value, data, {
            gasLimit: Math.round(gasEstimated * 1.3),
        })
    ).wait();

    const abi = ["event Submission(uint256 indexed transactionId)"];
    let iface = new ethers.utils.Interface(abi);
    const parsedEvent = await getParsedEventLogFromReceipt(receipt, iface, "Submission");
    await multisigCheckTx(parsedEvent.transactionId.value, multisig.address);
};

export const signWithMultisig = async (multisigAddress, txId, sender) => {
    const { ethers, getNamedAccounts } = hre;
    console.log("Signing multisig txId...", txId);
    const signer = await ethers.getSigner(sender);
    const multisig = await ethers.getContractAt("MultiSigWallet", multisigAddress, signer);
    const gasEstimated = (await multisig.estimateGas.confirmTransaction(txId)).toNumber();
    /*
    receipt = await (
        await multisig.confirmTransaction(txId, { gasLimit: Math.round(gasEstimated * 1.3) })
    ).wait();
    // console.log("Required signatures:", await multisig.required());
    console.log("Signed. Details:");
    await multisigCheckTx(txId, multisig.address);
    */
    console.log("Estimated Gas:", gasEstimated);
    const lastBlock = await ethers.provider.getBlock();
    const lastBlockGasLimit = lastBlock.gasLimit.toNumber();
    console.log("Last Block Gas Limit:", lastBlockGasLimit);
    const gasEstimatedMul = gasEstimated * 1.5;

    let receipt;
    let wontSign = false;
    if (gasEstimatedMul < lastBlockGasLimit) {
        try {
            await multisig.callStatic.confirmTransaction(txId, { gasEstimatedMul });
            receipt = await (await multisig.confirmTransaction(txId, { gasEstimatedMul })).wait();
        } catch (e) {
            wontSign = true;
        }
    }
    if (wontSign || gasEstimatedMul >= lastBlockGasLimit) {
        receipt = await (
            await multisig.confirmTransaction(txId, { gasLimit: lastBlockGasLimit })
        ).wait();
    }

    logger.warn("===============================================================================");
    logger.success("DONE. Details:");
    console.log("Tx hash:", receipt.transactionHash);
    console.log("Gas used:", receipt.gasUsed.toNumber());
    await multisigCheckTx(txId, multisig.address);
    logger.warn("===============================================================================");
};

export const multisigCheckTx = async (txId, multisigAddress = ethers.constants.ADDRESS_ZERO) => {
    const {
        ethers,
        deployments: { get },
    } = hre;
    const multisig = await ethers.getContractAt(
        "MultiSigWallet",
        multisigAddress == ethers.constants.ADDRESS_ZERO
            ? (
                  await get("MultiSigWallet")
              ).address
            : multisigAddress
    );
    const transaction = await multisig.transactions(txId);
    console.log(
        "TX { ID: ",
        txId,
        ", Data: ",
        transaction.data,
        ", Value: ",
        transaction.value.toString(),
        ", Destination: ",
        transaction.destination,
        ", Confirmations: ",
        (await multisig.getConfirmationCount(txId)).toNumber(),
        ", Executed:",
        transaction.executed,
        ", Confirmed by:",
        await multisig.getConfirmations(txId),
        "}"
    );
};

export const multisigRevokeConfirmation = async (
    txId,
    sender,
    multisigAddress = ethers.constants.ADDRESS_ZERO
) => {
    const {
        ethers,
        deployments: { get },
    } = hre;
    const signer = await ethers.getSigner(sender);
    const multisig = await ethers.getContractAt(
        "MultiSigWallet",
        multisigAddress == ethers.constants.ADDRESS_ZERO
            ? (
                  await get("MultiSigWallet")
              ).address
            : multisigAddress,
        signer
    );
    logger.info("Revoking confirmation of txId", txId, "...");
    receipt = await (await multisig.revokeConfirmation(txId)).wait();
    // console.log("Required signatures:", await multisig.required());
    logger.success(`Confirmation of txId ${txId} revoked.`);
    logger.info("Details:");
    await multisigCheckTx(txId, multisig.address);
};

export const multisigExecuteTx = async (
    txId,
    sender,
    multisigAddress = ethers.constants.ADDRESS_ZERO
) => {
    const {
        ethers,
        deployments: { get },
    } = hre;
    const signer = await ethers.getSigner(sender);
    const multisig = await ethers.getContractAt(
        "MultiSigWallet",
        multisigAddress == ethers.constants.ADDRESS_ZERO
            ? (
                  await get("MultiSigWallet")
              ).address
            : multisigAddress,
        signer
    );
    logger.info("Executing multisig txId", txId, "...");
    const gasEstimated = (await multisig.estimateGas.executeTransaction(txId)).toNumber();
    logger.info("Estimated Gas:", gasEstimated);
    const lastBlock = await ethers.provider.getBlock();
    const lastBlockGasLimit = lastBlock.gasLimit.toNumber();
    logger.info("Last Block Gas Limit:", lastBlockGasLimit);
    const gasEstimatedMul = gasEstimated * 1.3;

    let receipt;
    let wontExecute = false;
    if (gasEstimatedMul < lastBlockGasLimit) {
        try {
            await multisig.callStatic.executeTransaction(txId, { gasEstimatedMul });
            receipt = await (await multisig.executeTransaction(txId, { gasEstimatedMul })).wait();
        } catch (e) {
            wontExecute = true;
        }
    }
    if (wontExecute || gasEstimatedMul >= lastBlockGasLimit) {
        receipt = await (
            await multisig.executeTransaction(txId, { gasLimit: lastBlockGasLimit })
        ).wait();
    }

    logger.warning(
        "==============================================================================="
    );
    console.log(col.greenBright("DONE. Details:"));
    console.log("Tx hash:", receipt.transactionHash);
    console.log("Gas used:", receipt.gasUsed.toNumber());
    await multisigCheckTx(txId, multisig.address);
    logger.warning(
        "==============================================================================="
    );
};