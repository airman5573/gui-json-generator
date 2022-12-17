import * as util from "../utils";

/**
 * Generates a random integer in the given range.
 *
 * @param { number } [min] Minimum for the generated number. Defaults to 0.
 * @param { number } [max] Maximum for the generated number. Defaults to 1000.
 * @returns { function(any, number): number } Generated number.
 */
const integer =
  (min = 0, max = 1000) =>
  (_, loopIndex) => {
    return util.randomNumber(min, max);
  };

export default integer;
