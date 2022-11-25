import { DeployFunction } from "hardhat-deploy/types";
const {deployments} = require('hardhat');


const func: DeployFunction = async ({
  deployments: { deploy },
  getNamedAccounts,
  network,
}) => {
  const { deployer } = await getNamedAccounts();

  await deploy("FeesVault", {
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
          args: [],
        },
      },
    },
    from: deployer,
    log: true,
  });
};

func.tags = ["FeesVault"];

export default func;
