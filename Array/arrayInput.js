// Write a javascript function to check whether an 'input' is an array or not.

const checkArray = (params) => {

        if (params.type == []) {
                return []
        }
        return params.type;

}


console.log(checkArray({ content: "new" }))

// Correct Approach 

const checkingArray = (params) => {
        if (Array.isArray(params)) {
                return true;
        }
        return false;
}

console.log(checkingArray([2, 3, 3]))

