/*
. Display Colors with Ordinals

We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -
Note : Use ordinal numbers to tell their position.

PusdueCode:

Step1: Create a function that taeks array as a paramters
Step2: Create a variable to store the result
Step3: Loop over each element in the array
Step4: Check the index of the element and assign the ordinal accordingly
Step5: Add the ordinal to the result string
Step6: Return the result

*/


const displayColorsWithOrdinals = (colors) => {
        const ordinals = ["th", "st", "nd", "rd"];
        let result = "";

        for (let i = 0; i < colors.length; i++) {
                // Determine the current position (1-based index)
                const position = i + 1;

                // Calculate the correct ordinal suffix
                const suffix =
                        position % 10 === 1 && position % 100 !== 11 ? ordinals[1] :
                                position % 10 === 2 && position % 100 !== 12 ? ordinals[2] :
                                        position % 10 === 3 && position % 100 !== 13 ? ordinals[3] :
                                                ordinals[0];

                // Append the formatted string to the result
                result += `${position}${suffix} choice is ${colors[i].trim()}.\n`;
        }

        return result.trim(); // Remove any trailing newline
};

// Test the function
const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
console.log(displayColorsWithOrdinals(colors));
