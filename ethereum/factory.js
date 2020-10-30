import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x327F615C9F5bfEc072b8f1A8c39709544fB59813"
);

export default instance ;