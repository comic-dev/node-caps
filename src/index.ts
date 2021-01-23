import * as Func from "./func/index";
export default {
  ...Func,
  version: require("../package.json").version,
};
