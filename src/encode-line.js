const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let symbolCount = 1;
  let str2 = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      symbolCount++;
    } else {
      str2 += symbolCount + str[i];
      symbolCount = 1;
    }
  }
  return str2.replaceAll('1', '');
}

module.exports = {
  encodeLine
};
