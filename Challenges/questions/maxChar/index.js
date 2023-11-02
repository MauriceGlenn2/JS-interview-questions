/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */


//Have to use the charater Map, 

const maxCharacter = (str) => {
  //   // create a character map
  //   let charMap = {};
  //   let max = 0;
  //   let maxChar = "";

  //   // create a character map
  //   for (let char of str) {
  //     charMap[char] = charMap[char] + 1 || 1;
  //   }

  //   //loop over every char in the char map
  //   for (let char in charMap) {
  //     //if the value of the char is greater than max
  //     if (charMap[char] > max) {
  //       //set max to the value
  //       max = charMap[char];
  //       //set maxChar to the character
  //       maxChar = char;
  //     }
  //   }
  //   return maxChar;

  const charMap = new Map();
    let max = 0;
    let maxChar = "";

  for (const char of str) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }

  for (const [char, count] of charMap) { // of iterates over everything but objects
  if (count > max) {
        //set max to the value
        max = count;
        //set maxChar to the character
        maxChar = char;
}
  
};
return maxChar;
}
module.exports = maxCharacter;
