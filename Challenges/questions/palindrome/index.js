/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */


// Using reverse()
// const palindrome = (str) => {
//   let reversed =  str.split('').reverse().join('')
//   return reversed === str

// };


//Using for of loop
// const palindrome = (str) => {
//     let reversed =  ''
//     for (let char of str){
//         reversed = char + reversed
//     }
//     return reversed === str
// };


//Use every() method, can only be used on arrays
//this is inefficent 
// const palindrome = (str) => {
//     return str.split('').every((char, index) =>(
//         char === str[str.length - 1 - index]))
// };

//*******************iterate over the first half of a string odd or even********************
//efficent BEST WAY TO SOLVE
const palindrome = (str) => {
    const middle = Math.floor(str.length / 2) // iterate over first 2 indexes. 
    for (let i = 0; i < middle; i++){
      const oppositeIndex = str.length - 1 - i; //if current char not equal to opposite index
      if (str[i] !== str[oppositeIndex]) {
        return false;
      }
    }
    return true
}








module.exports = palindrome;
