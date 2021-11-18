const BlocksMarketplace = artifacts.require('BlocksMarketplace');

module.exports = function (deployer) {
    deployer.deploy(BlocksMarketplace);
};
