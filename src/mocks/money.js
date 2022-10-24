import * as util from "../utils/index.js";

const money =
  (min = 100, max = 10000, interval = 1000) =>
  (_, loopIndex) => {
    return util.randomMoney(min, max, interval);
  };

export default money;