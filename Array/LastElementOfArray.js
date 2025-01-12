// Write a simple javascript program  to get the last elment of an Array. Passing
// the parameter 'n' will return the last 'n' elements of the Array.apply

const LastElementOfArray = (n, arr) => {
        if (!arr || !arr.length) return [];
        if (n === undefined || n === null) return arr[arr.length - 1];
        return arr.slice(-n);
}


console.log(LastElementOfArray(-5,[3, 4, 5, 6, 7, 8] ))