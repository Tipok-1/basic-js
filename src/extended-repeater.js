const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let {repeatTimes = 1,separator = "+",addition,additionRepeatTimes = 1,additionSeparator = '|'} = options;
  let result = '';
  let one_str = ''; 
  if(repeatTimes != 0)
  {
    if(addition !== undefined)
    {
      if(additionRepeatTimes != 0 )
      {
        if(additionRepeatTimes !=1){
          one_str = String(String(str) + (String(addition) + additionSeparator).repeat(+additionRepeatTimes -1));
          one_str += String(addition)}
        else{one_str = String(str) + String(addition);}
      }
      else{
        one_str = String(str);
      }
    }
    else{
      one_str = String(str);
    }
      while(repeatTimes !=0)
      {
        if(repeatTimes !=1){result += one_str + String(separator);}
        else{result += one_str;}
        --repeatTimes
      }
    
  }
  else{
    if(addition !== undefined)
    {
      if(additionRepeatTimes != 0)
      {
        
        if(additionRepeatTimes !=1){
          one_str = (String(String(addition) + additionSeparator).repeat(+additionRepeatTimes -1));
          one_str += String(addition)}
        else{one_str =String(addition);}
      }
      else{
        return 'strings';
      }
    }
    else{
      return 'strings';
    }

    while(repeatTimes !=0)
    {
      result += one_str;
      --repeatTimes
    }
  }
  return result;
}
module.exports = {
  repeater
};
