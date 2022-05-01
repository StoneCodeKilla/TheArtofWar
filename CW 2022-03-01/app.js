//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

//Array can contain numbers or strings. X can be either.

//Return true if the array contains the value, false if not.

//P - Given array A, and random value X. Want to see if A has X in it. A can have numbers, strings.
// X can be a number or a string. Is it ever empty? Undefined? What do we do about special chars?
//R - True if x is in a, false if x is not. BUT TRUE, FALSE (boolean)
//E - Given [1,2,3] as a and 4 as x, should return FALSE
//    Given [7,6,3,2] as a and 6 as x, should return TRUE
//P - Make a function that takes in two parameters: an array, and a rando number

function numInArray(arr,num) {
    //look through array and see if any elements match num
    return arr.map(elem=>elem ===num ? true : false)
}

numInArray([1,2,3],4) //should return false


//second attempt and final answer
function numInArray(arr,num) {
    return arr.includes(num)
}
//way less complicated, i dont know why i complicate things lolololol. geeeezzzz 
