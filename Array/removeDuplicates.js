/* Write a javascript program to remove duplicates from an array(ignore case sensitivity).

PsudeoCode:
Step 1: Create a function that accepts an array as a parameter.
Step 2: Initialize an empty array to store unique items.
Step 3: Loop over each item in the array.
Step 4: Check if the item is already in the unique array (case insensitive).
Step 5: If not, add the item to the unique array.
Step 6: Return the unique array.
*/

const removeDuplicates = (arr)=>{
        let uniqueArray = [];
        for(let i=0; i<arr.length; i++){
                let item = arr[i].toLowerCase();
                if(!uniqueArray.includes(item)){
                        uniqueArray.push(item);
                }
        }
        return uniqueArray;

}


// Test the function with an array of items
const arr = ['Apple', 'banana', 'apple', 'cherry', 'Banana'];
let result = removeDuplicates(arr);
console.log(result); // ['apple', 'banana', 'cherry']


// Solutions 2 

const removeDuplicatez = (arr) => {
        return [...new Set(arr.map(item => item.toLowerCase()))];
}
// Test the function with an array of items     
const arr1 = ['Apple', 'banana', 'apple', 'cherry', 'Banana'];
let result1 = removeDuplicates(arr);
console.log(result1); // ['apple', 'banana', 'cherry']

