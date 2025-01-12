/* Write a simple javascript program to join all elements
 of the following array into a String */

 const joinElements = ( arr)=>{

         if (!Array.isArray(arr)) return ''; 
        return arr.join('')
 }

console.log(joinElements("not an array"));
console.log(joinElements(["a", "b", "c"]));