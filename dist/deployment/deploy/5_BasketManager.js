"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async ({ ethers, deployments, getNamedAccounts, }) => {
    const { deploy, getOrNull, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const deployedMassetManager = await deployments.get("MassetManager");
    const deployedToken = await deployments.get("DLLR");
    const deployedFeesVault = await deployments.get("FeesVault");
    const deployedFeesManager = await deployments.get("FeesManager");
    const bmDeployment = await getOrNull("BasketManagerV3");
    const bmInitialized = bmDeployment != null;
    await deploy("BasketManagerV3", {
        // @todo - replace BasketManagerV3 -> BasketManager (requires removing or renaming legacy BasketManager contract)
        contract: "BasketManagerV3",
        proxy: {
            owner: deployer,
            proxyContract: "OpenZeppelinTransparentProxy",
            viaAdminContract: {
                name: "MyntAdminProxy",
                artifact: "MyntAdminProxy",
            },
            execute: {
                init: {
                    methodName: "initialize",
                    args: [deployedMassetManager.address],
                },
            },
        },
        from: deployer,
        log: true,
    });
    // Initialize  MassetManager
    const deployedBasketManager = await deployments.get("BasketManagerV3");
    const massetManager = (await ethers.getContract("MassetManager"));
    const mmInitialized = (await massetManager.getBasketManager()) !== ethers.constants.AddressZero &&
        (await massetManager.getToken()) !== ethers.constants.AddressZero;
    if (!mmInitialized) {
        await deployments.execute("MassetManager", { from: deployer }, "initialize", deployedBasketManager.address, deployedToken.address, false);
    }
    const mmUpgraded = (await massetManager.getFeesVault()) === deployedFeesVault.address &&
        (await massetManager.getFeesManager()) === deployedFeesManager.address;
    if (!mmUpgraded) {
        // Upgrade  MassetManager To V3
        await deployments.execute("MassetManager", { from: deployer }, "upgradeToV3", deployedBasketManager.address, deployedToken.address, deployedFeesVault.address, deployedFeesManager.address);
    }
    const massetManagerVersion = await deployments.read("MassetManager", "getVersion");
    log("Masset Version :", massetManagerVersion);
    // Set  MassetManager & Basket Manager in DLLR contract
    const dllr = (await ethers.getContract("DLLR"));
    if ((await dllr.massetManagerProxy()) !== deployedMassetManager.address) {
        await deployments.execute("DLLR", { from: deployer }, "setMassetManagerProxy", deployedMassetManager.address);
    }
    if ((await dllr.basketManagerProxy()) !== deployedBasketManager.address) {
        await deployments.execute("DLLR", { from: deployer }, "setBasketManagerProxy", deployedBasketManager.address);
    }
};
func.tags = ["BasketManager"];
func.dependencies = [
    "MyntAdminProxy",
    "MassetManager",
    "DLLR",
    "FeesVault",
    "FeesManager",
];
exports.default = func;
//# sourceMappingURL=5_BasketManager.js.map