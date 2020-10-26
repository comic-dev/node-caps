const Caps = require("./func/index");
module.exports = {
  ...Caps,
  version: require("../package.json").version,
};
