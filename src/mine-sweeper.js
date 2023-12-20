const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let matr = [];
  let arr = [];
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      arr.push(0);
    }
    matr.push(arr);
    arr = [];
  }
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j]){
        for ( let m = -1; m < 2; m++ ){
          for ( let n = -1; n < 2; n++ ){
            try{
                if(typeof matr[i+m][j+n] !== 'undefined'){
                  if(!(m===0&&n===0)){
                    matr[i+m][j+n] += 1;
                  }
                }
            }
            catch { }
          }    
        }
      }
    }
    
  }

  return matr;
}
module.exports = {
  minesweeper
};
