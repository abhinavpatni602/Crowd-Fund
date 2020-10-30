const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
'meadow census undo vault item waste pyramid best parent dad ignore moral',
'https://rinkeby.infura.io/v3/69bddf21f78343cf838b7fa14259d12c'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode }) // add bytecode
    .send({ from: accounts[0] }); // remove gas

  console.log('Contract deployed to', result.options.address);
};
deploy();
