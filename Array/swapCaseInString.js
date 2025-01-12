/* Write a Javascript program that accepts a string as input
and swaps the case of each character. For example if you input
'The Quick Brown Fox', the output should be 
'tHE qUICK bROWN fOX' */

// My psudeo code
// Step:1 Create  a function to accept string as a parameter
// Step: 2 Create a variable to store the result
// Step: 3 Now ue the outer loop to loop inside the string
// Step: 4 Now use inner loop to count number of substring
// Step: 5 If the substring is a space, add it to the result
// Step: 6 If the substring is a lowercase letter, convert it to uppercase and add it to the result and do viceversa.

// Corrected PsudeoCode:

// Step:1 Create  a function to accept string as a parameter
// Step: 2 Create a variable to store the result
// Step: 3 Loop through each character in the string
// Step: 4 Check if the character is a space add it to the result without change
// Check if the character is lowercase, convert it to uppercase and add it to the result.
// Check if the character is uppercase, convert it to lowercase and add it to the result.
// Step: 5 Return the final result

const swapCaseInSting = (str) => {
  let result = '';
  for (let char of str) {
    if (char === " ") {
      result += char;
    } else if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  return result;
};


const str = "The Quick Brown Fox";
console.log(swapCaseInSting(str)); // Expected Output: tHE qUICK bROWN fOX