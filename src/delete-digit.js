const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let n_string = String(n)
  let str;
  let arr = []
  for (let i = 0; i < n_string.length; i++) {
    str = n_string.slice(0, i) + n_string.slice(i + 1)
    arr.push(str)
  }
  arr.sort((a, b) => b - a)
  return Number(arr[0]);
}
console.log(deleteDigit(222219));
module.exports = {
  deleteDigit
};
