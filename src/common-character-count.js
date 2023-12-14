const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let arr = s2.split('');
  for (let i = 0; i < s1.length; i++) {
    if(arr.includes(s1[i])) {
      arr=[...arr.slice(0,arr.indexOf(s1[i])),...arr.slice(arr.indexOf(s1[i])+1, arr.length)];
      count++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
