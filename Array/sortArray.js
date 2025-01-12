// Wirte a Javscript program to sort the items of an Array  
// Sample array : var arr1 = [-3,8,7,6,5,-4,3,2,1];
// Sample Output : [-4,-3,1,2,3,5,6,7,8]

const sortArray = (arr)=>{
        if(!Array.isArray(arr)) return [];
  return arr.sort((a,b) => a - b);
}


console.log(sortArray([-3,8,7,6,5,-4,3,2,1])); // [-4,-3,1,2,3,5,6,7,8]


// doing it using bubble sort

const sortArray2 = (arr) => {

        // Checking if the input is an array
        if (!Array.isArray(arr)) {
                console.error("Input is not an array");
                return [];
        }

        // Handling the empty array case
        if (arr.length === 0) {
                console.log('Array is empty');
                return [];
        }

        // Implementing bubble sort algorithm
        const n = arr.length;

        // Bubble sort: Repeat through the array
        for (let i = 0; i < n; i++) {
                // Inner loop to perform the comparison
                for (let j = 0; j < n - i - 1; j++) {
                        // Compare adjacent elements and swap if necessary
                        if (arr[j] > arr[j + 1]) {
                                // Swapping the elements
                                const temp = arr[j];
                                arr[j] = arr[j + 1];
                                arr[j + 1] = temp;
                        }
                }
        }

        return arr;
}

const arr2 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

console.log(sortArray2(arr2)); // Expected Output: [-4, -3, 1, 2, 3, 5, 6, 7, 8]
