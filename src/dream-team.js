const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let result = '';
    let arr = members.map((name) => {
      if ((typeof name) == 'string')
        return name.trim()
    });
    arr.sort((a, b) => a.localeCompare(b));
    for (let name of arr) {
      if ((typeof name) == 'string') {
        result += name[0];
      }
    }
    if (result == '') {
      return false;
    }
    else {
      return result.toUpperCase();
    }
  }
  else{
    return false;
  }
}
module.exports = {
  createDreamTeam
};
