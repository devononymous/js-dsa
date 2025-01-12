/* Write a javascript program to find the most frequent item of an array 
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/

const findMostFreqItem = (arr) => {
        // Step 1:  Create a frequency object to store counts

        const frequency = {};

        // Step 2: Count occurences of each item in a single pass

        for (let item of arr) {
                frequency[item] = (frequency[item] || 0) + 1;

        }

        // Step 3: Find the  item with the highest frequency

        let mostFreequentItem = null;
        let maxCount = 0;

        for (let item in frequency) {
                if ((frequency[item] > maxCount)) {
                        mostFreequentItem = item;
                        maxCount = frequency[item];
                }
        }

        return `${mostFreequentItem} ( ${maxCount} times )`;
}


const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(findMostFreqItem(arr1)); 