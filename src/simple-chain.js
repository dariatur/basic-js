const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.chain.push('( '+value+' )');
    return chainMaker;
  },
  removeLink(position) {
    if(!(typeof position === 'number') || !Number.isInteger(position) || position>this.chain.length || position<1){
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    let arr = []
    for(let i = 0; i < this.chain.length; i++){
      if(i!==position-1){
        arr.push(this.chain[i]);
      }
    }
    this.chain = arr;
    return chainMaker;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    const res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
