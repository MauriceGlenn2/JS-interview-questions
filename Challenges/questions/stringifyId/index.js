/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */


/**
 * Convert the array of objects into an Array of ID;s
 * 
 * convert the array of Id's into an array of unique ID's
 *
 * join the array to creat a string of ID's separated by ", " 
 * 
 * get rid of last 2 char in a string slice(0, str.length - 2)
 */

//  const stringifyId = (arr) => {
//     const idArray = arr.map(obj => obj.id)
//     const uniqueArry =[]
//     let idString = ""


//     for (let id of idArray){
//         if(!uniqueArry.includes(id)){
//             uniqueArry.push(id)
//         }
//     }

//     for (let i = 0; i < uniqueArry.length; i++){
//         //if we are not on the last element
//         if(i !== uniqueArry.length - 1){
//           //add the id and ", "
//           idString += `${uniqueArry[i]}, `;
//         }
//         else{
//           //just add the id
//           idString += uniqueArry[i];
//         }
        
//     }
    
//     return idString 

// };

//top tech code
// const stringifyId = (arr) => {
//   const idArray = arr.map(obj => obj.id)
//     const uniqueArry =[]
//     for (let id of idArray){
//         if(!uniqueArry.includes(id)){
//             uniqueArry.push(id)
//         }
//     }
//     return uniqueArry.join(", ")
// }

//using set
const stringifyId = (arr) => {

}


module.exports = stringifyId;
