const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix) {
  //throw new NotImplementedError('Not implemented');
  let cats_num = 0;
  for(let el of matrix)
  {
    for(let i = 0; i < el.length; i++)
    {
      if(el[i] != undefined)
      {
        if(el[i] == '^^')
        {
          cats_num++;
        }
      }
    }
  }
  return cats_num;
}
module.exports = {
  countCats
};
