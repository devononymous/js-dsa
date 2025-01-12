/* Write a javascript program to add items to a blank array and display them. 

 PsudeoCode: 
 Step 1: Create a function that accepts an array as a parameter.
        Step 2: Initialize an empty array to store the items.
        Step 3: Loop over each item in the array.
        Step 4: Add each item to the empty array.
        Step 5: Return the array with the items.

*/  

const addItemsToArray = (arr) => {
        let items = [];
        for(let i=0; i<arr.length; i++){
                items.push(arr[i])
        }
        return items;
}

// Test the function with an array of items     
const arr = ['apple', 'banana', 'cherry', 'date'];
let result = addItemsToArray(arr);
console.log(result)