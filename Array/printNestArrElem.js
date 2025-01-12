/* Write a javascript program that prints the elements of 
the following array.

Note:  Use nested for loops.

Sample Array : var a =  [[1,2,1,24], [8,11,9,4], [7,0,7,27], [7,4,28,14], [3,10,26,7]];
Sample Output:
"row 0"
"1"
"2"
"1"
"24"
"row 1" 
*/


// Step:1 Create a function that accepts array as a paramenter
// Step: 2  Iterate over the main array to count the number of sub arrays
// Step: 3   Iterate insde the sub arrays and check the length of each sub array
// Step: 4   Now print the elements of the sub array and add a counter to the sub array so that 
// interpreter can identify it is first array as row0, row1... till HTMLTableRowElement.


// Corrected PsudeoCode:

// Step:1 Create a function that accepts array as a paramenter
// Step: 2  Loop over each row in the main array;
// Step: 3   Print the current row indes as "rw x"
// Step: 4   Loop over each element in the current row(sub array).
// Step: 5   Print the current element in the row.

const printNestArrElem = (arr) => {
        let result = ""; // Initialize a string to store the result

        // Iterate through each row of the main array
        for (let i = 0; i < arr.length; i++) {
                result += `row ${i}\n`; // Add the row number
                // Iterate through each element in the current row (subarray)
                for (let j = 0; j < arr[i].length; j++) {
                        result += `${arr[i][j]}\n`; // Add each element in the row
                }
        }

        return result; // Return the result
};


// Sample array
const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// Call the function and store the result
let output = printNestArrElem(a);
console.log(output)