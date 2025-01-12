/* Write a Javascript Program that acccepts a number as input
 an inserts dashes (-) between each even number. For example if
 you accept 025468 the output should be 0-254-6-8 */

 const insertEvenDashes =(num)=>{
        // convert the number to string to iterate each digit
        const numStr = num.toString();
        let result = '';

        // loop through each character in the string
        for(let i= 0; i < numStr.length; i++){

                result += numStr[i]; // Add the current digit to the result

                // Check if the current digit and the next digit are even

                if(i < numStr.length - 1  &&  numStr[i] % 2 == 0 && numStr[i+1] % 2 == 0){
                        result += '-'; // add a dash if both digits are even
                }
        }
        return result;


      
 }

 console.log(insertEvenDashes(525468)); 