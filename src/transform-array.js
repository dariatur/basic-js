const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(arr instanceof Array)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let array = [...arr];
  for(let i = 0; i < array.length; i++) {
      
    if(typeof array[i] == 'string') {
      if(array[i].split('-')[2] === 'double'){
        switch(array[i].split('-')[3]){
          case 'prev': array = double(array, i, 'prev');
                      break;
          case 'next': array = double(array, i, 'next');
        }
      }else if(array[i].split('-')[2] === 'discard'){
        switch(array[i].split('-')[3]){
          case 'prev': array = discard(array, i, 'prev');
                      break;
          case 'next': array = discard(array, i, 'next');
        }
      }
    }
  }
  return array;
}

function double(arr, index, str) {
  let array = [];

  if(str === 'next'){
      if(index === arr.length-1){
        array = [...arr.slice(0, arr.length-1)];
      } else {
        array = [...arr.slice(0,index),arr[index+1],...arr.slice(index+1,arr.length)]
      }
  } else if(str === 'prev'){
      if(index === 0){
        array = [...arr.slice(index+1, arr.length)];
      } 
      else {
        array = [...arr.slice(0,index),arr[index-1],...arr.slice(index+1, arr.length)];
      }
    
  }
  return array;
}

function discard(arr, index, str) {
  let array = [];
  if(str === 'prev'){
      if(index === 0){
        array = [...arr.slice(index+1, arr.length)];
      } else {
        array = [...arr.slice(0,index-1),...arr.slice(index+1, arr.length)];
      }
  } else if(str === 'next'){
    if(index === arr.length-1){
      array = [...arr.slice(0, arr.length-1)];
    } else{
      if(arr[index+2]==='--discard-prev'||arr[index+2]==='--double-prev'){
        array = [...arr.slice(0,index),...arr.slice(index+3, arr.length)];
      } else {
        array = [...arr.slice(0,index),...arr.slice(index+2, arr.length)];
      }
    }
  }
  return array;
}

module.exports = {
  transform
};
