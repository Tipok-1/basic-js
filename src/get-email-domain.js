const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domen = "";
  for(let i = email.split('').lastIndexOf('@') +1; i < email.length; i++)
  {
    domen+= email[i];
  }
  return domen;
}
module.exports = {
  getEmailDomain
};
