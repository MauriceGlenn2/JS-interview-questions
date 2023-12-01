/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

const anagrams = (strA, strB) => {
  //create 2 char maps, one for each string
  const charMapA = buildCharMaps(strA);
  const charMapB = buildCharMaps(strB);
  //need to loop over char maps to compare

  //if you have a char map that the is shorter than the other, but has the same chars, it will return true because
  //length is not long enough
  if (charMapA.size !== charMapB.size) return false;

  //loops over every single char in char map A and compares the count to the same count in charmap B
  //if they are not the same, return false
  for (const [charA, countA] of charMapA) {
    if (charMapB.get(charA) !== countA) return false;
  }
  return [charMapA, charMapB];
}

//create a helper function to remove spaces and lowercase, and for loops over char maps
//never repeat code, use helper functions
const buildCharMaps = (str) => {
  const charMap = new Map();
  for (const char of removeSpacesAndLowerCase(str)) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }
  return charMap;
}

const removeSpacesAndLowerCase = (str) => {
  return str.replaceAll(' ', '').toLowerCase();
}

//solve in 2 lines of code
const anagrams = (strA, strB) => {
    return cleanString(strA) === cleanString(strB);
}
//use function for repeanable code
const cleanString = (str) => {
    return str.toLowerCase().replace(" ", '').split('').sort().join('');
}
module.exports = anagrams;


