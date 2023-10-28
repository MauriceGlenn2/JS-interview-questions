/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

//0 - str[i] = d, reversed = 'd' + '' = 'd'
//1 - str[i] = a, reversed = 'a' + 'd' = 'ad'
//2 - str[i] = v, reversed = 'v' + 'ad' = 'vad'
//3 - str[i] = i, reversed = 'i' + 'vad' = 'ivad'
//4 - str[i] = d, reversed = 'd' + 'ivad' = 'divad'

// const reverseString = (str) => {
//     let reversed = ""
//  for (let i = 0; i < str.length; i++ ){
//     reversed = str[i] + reversed
//  }
//  return reversed
// };
// console.log(reverseString("david"));
// module.exports = reverseString;

/**For of loop */

//0 - char = d, reversed = 'd' + '' = 'd'
//1 - char = a, reversed = 'a' + 'd' = 'ad'
//2 - char = v, reversed = 'v' + 'ad' = 'vad'
//3 - char = i, reversed = 'i' + 'vad' = 'ivad'
//4 - char = d, reversed = 'd' + 'ivad' = 'divad'
// const reverseString = (str) => {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed
//   }
//   return reversed;
// };
// console.log(reverseString("david"));
// module.exports = reverseString;

/** Reverse */
// const reverseString = (str) => {
//  return str.split("").reverse().join("");

// };
// console.log(reverseString("david"));
// module.exports = reverseString;

/**Using REDUCE */
//reduce can only be used with an array

//adding elements in arr usiing reduce
// const arr = [1, -1, 2, 3]

// const sum = arr.reduce((accumlator, currentValue) => {
//    return accumlator + currentValue
// }, 0)

// console.log(sum)

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'
const reverseString = (str) => {
  str.split("").reduce((accumlator, current) => {
    return current + accumlator;
  });
};

console.log(reverseString("david"));
module.exports = reverseString;
