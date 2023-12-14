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
  let separator = options.hasOwnProperty('separator') ? options.separator : '+';
  let additionSeparator = options.hasOwnProperty('additionSeparator')? options.additionSeparator : '|';
  const arr1 = new Array(options.additionRepeatTimes);
  const arr2 = new Array(options.repeatTimes);
  for (let i = 0; i < arr1.length; i++) {
    if(options.addition === null){
      arr1[i] = 'null';
    } else {
      arr1[i] = options.addition;
    }
  }
  const newStr = str+arr1.join(additionSeparator);
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = newStr;
  }
  return arr2.join(separator);
}

module.exports = {
  repeater
};
