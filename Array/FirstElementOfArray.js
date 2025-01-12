/* Write a javascript function to get the first element of an array ,
passing the parameter 'n' will return the first 'n' elements of the array */

 const firstElement = (n, arr) =>{
        if(arr.length < 1){
                return [];
        }
        if(n === undefined || n === null){
                return arr[0];
        }
        return arr.slice(0,n);
 }



 console.log(firstElement(3,[1,2,5,6]))

//  optimized way 
const firstNElement = (n, arr) => arr.slice(0, n || 1);