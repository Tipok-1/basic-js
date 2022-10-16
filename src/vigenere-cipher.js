const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mashine_type = true) {
    this.mashine_type = mashine_type;
    this.ABC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  }
  encrypt(message, key) {
  if (message == undefined || key == undefined)
    throw new Error('Incorrect arguments!');
  let result = '';
  let key_index = 0;
  let nums;
    for(let i = 0; i < message.length; i++)
    {
      if(this.ABC.indexOf(message[i].toLowerCase()) !=-1)
      {
        if(key_index == key.length)
          key_index = 0;
        nums = this.ABC.indexOf(message[i].toLowerCase()) + this.ABC.indexOf(key[key_index].toLowerCase());
        if(nums >= 26)
          nums %= 26;
        result += this.ABC[nums];
      }
      else{
        result += message[i];
        --key_index;
      }
      key_index++;
    }
    if (this.mashine_type) {
      return result.toUpperCase();
    }
    else {
      let p = result.split(" ").map(
        (a)=>{return a.split("").reverse().join("")}
       ).reverse().join(" ");
      return p.toUpperCase();
    }
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined)
      throw new Error('Incorrect arguments!');
    let result = '';
    let key_index = 0;
    let nums;
    encryptedMessage = encryptedMessage.toLowerCase() 
    for(let i = 0; i < encryptedMessage.length; i++)
    {
      if(this.ABC.indexOf(encryptedMessage[i].toLowerCase()) !=-1)
      {
        if(key_index == key.length)
          key_index = 0;
        nums = this.ABC.indexOf(encryptedMessage[i].toLowerCase()) - this.ABC.indexOf(key[key_index].toLowerCase());
        if(nums < 0)
        {
          nums =  26 - Math.abs(nums);
        }
        result += this.ABC[nums];
      }
      else{
        result += encryptedMessage[i];
        --key_index;
      }
      key_index++;
    }
    if(!this.mashine_type)
    {
       let p = result.split(" ").map(
        (a)=>{return a.split("").reverse().join("")}
       ).reverse().join(" ");
       return p.toUpperCase();
    }
    return result.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
