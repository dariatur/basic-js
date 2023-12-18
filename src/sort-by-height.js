const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let array = [...arr].filter(elem => elem !== -1);
  let check = true;
  const indexes = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === -1) {
      indexes.push(i);
    }
  }
  while(check){
    check = false;
    for(let i = 0; i < array.length-1; i++) {
      if(array[i] > array[i+1] && array[i+1] !== -1){
        const temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        check = true;
      }
    }
  }

  for(let i = 0; i <indexes.length; i++) {
    array = [...array.slice(0, indexes[i]), -1, ...array.slice(indexes[i], array.length)];
  }
  return array;
}

module.exports = {
  sortByHeight
};
