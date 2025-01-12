/* Write a javascript rpgoram to compute the sum and product
of an array of integers. */







// Corrected PsudeoCode:        
// Step 1: Create a function that accepts an array as a parameter'      
// Step 2: Initialize the sum and product variables to 0 and 1 respectively.
// Step 3: Loop over each element in the array.
// Step 4: Add the current element to the sum.
// Step 5: Multiply the current element to the product.
// Step 6: Return the sum and product.


const sumNProduct = (arr) => {
        let sum = 0;
        let producct = 1;
        for(let i=0; i<arr.length; i++){
                sum += arr[i];
                producct *= arr[i];
        
                }
        
        return [sum, producct];
}
// Test the function with an array of integers
const arr = [1, 2, 3, 4, 5];    
let result = sumNProduct(arr);
console.log(result); // [15, 120]


