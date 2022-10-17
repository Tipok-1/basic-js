const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  all_links:[],
  getLength() {
    return this.all_links.length;
  },
  addLink(value) {
    this.all_links.push(String(value));
    return this;
  },
  removeLink(position) {
    if(position <= this.all_links.length &&  position > 0)
    {this.all_links.splice(position-1,1);
      return this;
    }
    else{
      this.all_links = [];
      throw new Error("You can't remove incorrect link!")
    }
  },
  reverseChain() {
    if(this.all_links.length !=0)
      this.all_links.reverse();
    return this;
  },
  finishChain() {
    let result = "";
    for(let i = 0; i < this.all_links.length; i++)
    {
      if(i != this.all_links.length -1)
      {
        result += '( ' + String(this.all_links[i])+' )' + '~~';
      }
      else{
        result += `( ${this.all_links[i]} )`
      }
    }
    this.all_links = [];
    return String(result);
  }
};
module.exports = {
  chainMaker
};
