// Write a javascript program to shuffle an array.

 /*Psuedo code:

fisher yeats shuffle algorithm
1. start from the last element of the array
2. pick a random element from the array
3. swap the random element with the last element
4. repeat the process for the remaining elements
5. return the shuffled array


*/

let arr1 = [1, 52, 3, 44, 5, 86, 27, 8, 19, 110];

function shuffleArray(arr) {
        let shuffledArray = arr.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
}

console.log(shuffleArray(arr1)); // [27, 3, 8, 110, 5, 86, 19, 4, 52, 1]


const myNumbers = (array)=>{
        for(let i= array.length-1;i>0;i--){
                let j = Math.floor(Math.random()* i+1)
               let temp = array[i];
                array[i] = array[j];
                
        }
        return array;
}

console.log(myNumbers(arr1))