require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      chainId: 1337,
      accounts: {
        mnemonic: "start company two upgrade asthma lemon borrow hurt pitch rely what endorse"
      }
    },
    matic: {
      url: "https://orbital-dawn-firefly.matic-testnet.discover.quiknode.pro/734f955117d5593846c165bbe947c74bf9711316/",
      accounts: ["036d077b787976567641dc8fc0e19ca4f96ad3124f540f11081f675a3f442982"]
    }
  }
};
