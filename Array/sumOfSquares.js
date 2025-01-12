/* Write a JavaScript program to find the sum of squares of a numeric vector.


Psudeo code:
1. Create a function that takes an array as an argument.
2. Create a variable to store the sum of squares.
3. Loop through the array and square each element and add it to the sum.
4. Return the sum of squares.

*/

function sumOfSquares(arr) {
        let sum = 0;
        for(let i=0; i<arr.length; i++){
                sum += arr[i] * arr[i];
        }
        return sum;
}


// Test cases   
console.log(sumOfSquares([1, 2, 3, 4])); // 30  

