const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr))
  {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let array = arr.slice();
  let index_arr = [];
  for(let i =0; i< arr.length; i++)
  {
    if((arr[i] == '--discard-next'))
    {
      if(i != arr.length -1)
      {
        index_arr.push(i);
        if(!index_arr.includes(i-1))
          index_arr.push(i+1);
      }
      else{
        index_arr.push(i);}
    }
    if((arr[i] == '--discard-prev'))
    {
      if(i != 0)
      {
        if(!index_arr.includes(i-1))
          index_arr.push(i-1);
        index_arr.push(i);
      }
      else{ index_arr.push(i);}
    }
    if((arr[i] == '--double-next'))
    {
      if(i != arr.length -1)
      {
        if(!index_arr.includes(i+1))
        {array[i] = array[i+1];}
        else{index_arr.push(i)}
      }
      else{ index_arr.push(i);}
    }
    if((arr[i] == '--double-prev'))
    {
      if(i != 0)
      {
        if(!index_arr.includes(i-1))
        {array[i] = array[i-1];}
        else{index_arr.push(i)}
        
      }
      else{ index_arr.push(i);}
    }
  }
  if(index_arr.length !=0)
  {
    for(let i = index_arr.length-1; i >= 0; i--)
    {
      array.splice(index_arr[i],1);
    }
  }
  return array;
}
module.exports = {
  transform
};
