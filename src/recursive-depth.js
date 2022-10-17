const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  deeps = 0;
  calculateDepth(arr, deep = -1) 
  {
    if(deep == -1)
    {
      this.deeps = 0; 
      deep = 1;
    }
    if(deep > this.deeps)
    {this.deeps = deep;}
    arr.forEach(el => {
      if(Array.isArray(el))
      {
        return this.calculateDepth(el,deep +1);
      }
    });
    return this.deeps;
  }
}

module.exports = {
  DepthCalculator
};
