const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr1 = n.toString().split('');
  let arr2 = [];
  let max = 0;
  for (let i = 0; i < arr1.length; i++){
    arr2 = [...arr1.slice(0, i),...arr1.slice(i+1, arr1.length)];
    console.log(arr2)
    if(Number(arr2.join('')) > max){
      max = Number(arr2.join(''));
    }
  }
  
  return max;
}

module.exports = {
  deleteDigit
};
