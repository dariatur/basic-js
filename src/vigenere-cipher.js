const { NotImplementedError } = require('../extensions/index.js');
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  isDirect = true;

  constructor(isDirect) {
    if(arguments.length === 1){
        this.isDirect = arguments[0];
    } else {
        this.isDirect = true;
    }
  }

  encrypt(word, key) {
    if(arguments.length < 2 || typeof arguments[0] === 'undefined'){
      throw new Error('Incorrect arguments!');
    }
    let longKey = '';
    let i = 0;
    let cipher = '';
    while (longKey.length < word.length) {
      longKey += key[i];
      i++;
      if(i === key.length){
        i = 0;
      }
    }

    let k = 0;
    for (let i = 0; i <word.length; i++) {
      if(this.alphabet.indexOf(word[i].toUpperCase())!== -1){
        const index = (this.alphabet.length+this.alphabet.indexOf(word[i].toUpperCase())+this.alphabet.indexOf(longKey[k].toUpperCase())) % this.alphabet.length;
        cipher += this.alphabet[index];
        k++;
      } else {
        cipher += word[i];
      }
      
    }

    if(this.isDirect){
      return cipher;
    } else {
      return cipher.split('').reverse().join('');
    }
  }

  decrypt(cipher, key) {
    if(arguments.length < 2 || typeof arguments[0] === 'undefined'){
      throw new Error('Incorrect arguments!');
    }

    let longKey = '';
    let i = 0;
    let word = '';
    while (longKey.length < cipher.length) {
      longKey += key[i];
      i++;
      if(i === key.length){
        i = 0;
      }
    }

    let k = 0;
    for (let i = 0; i <cipher.length; i++) {
      if(this.alphabet.indexOf(cipher[i].toUpperCase())!== -1){
        const index = (this.alphabet.length+this.alphabet.indexOf(cipher[i].toUpperCase())-this.alphabet.indexOf(longKey[k].toUpperCase())) % this.alphabet.length;
        word += this.alphabet[index];
        k++;
      } else {
        word += cipher[i];
      }
      
    }

    if(this.isDirect){
      return word;
    } else {
      return word.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
