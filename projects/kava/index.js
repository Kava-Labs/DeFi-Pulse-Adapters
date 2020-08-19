/*==================================================
  Modules
  ==================================================*/

const sdk = require('../../sdk');
const Kava = require("@kava-labs/javascript-sdk");

/*==================================================
  TVL
  ==================================================*/

// TODO: Total Locked Value

/*==================================================
  Exports
  ==================================================*/

module.exports = {
  name: 'Kava', // project name
  website: 'https://kava.io/',
  category: 'lending',
  category: 'assets',
  category: 'staking', // allowed values as shown on DefiPulse: 'Derivatives', 'DEXes', 'Lending', 'Payments', 'Assets'
  token: 'KAVA', // null, or token symbol if project has a custom token
  start: 1514764800, // unix timestamp (utc 0) specifying when the project began, or where live data begins
}
