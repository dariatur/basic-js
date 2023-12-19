const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if(domains.length === 0){
    return {};
  }
  let arr = domains[0].split('.').reverse();
  let res = {};
  let count = 0;
  let k = 0;
  let str = '';
  while (k < domains.length) {
    for (let i = 0; i < arr.length; i++) {
      arr = domains[k].split('.').reverse();
      for (let j = 0; j < domains.length; j++) {
        if (domains[j].includes(arr[i])) {
          count++;
        }
      }
      str += '.' + arr[i];
      res[str] = count;
      count = 0;
    }
    str = '';
    k++
  }
  return res;
}

module.exports = {
  getDNSStats
};
