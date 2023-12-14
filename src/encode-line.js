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
  if(str === ''){
    return '';
  }
  let char = str[0];
    let count = 1;
    let shifr = '';
    for (let i = 1; i < str.length; i++) {
      if(str[i]===char){
          count++;
      } else {
          if(count === 1){
              shifr += char;
          } else {
              shifr += count.toString() + char;
          }
          char = str[i];
          count = 1;
      }
    }
      if(count === 1){
              shifr += char;
          } else {
              shifr += count.toString() + char;
          }
    return shifr;
}


module.exports = {
  encodeLine
};
