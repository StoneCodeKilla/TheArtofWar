//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//Example:
//348597 => [7,9,5,8,4,3]
//0 => [0]

//P - are you always given digits? are you ever given an empty array or undefined? what then?
//R - whatever number was given, it is now split up into an array and the order of the numbers is reversed.
//E - if we were given 3456 => [6,5,4,3]
//P - make a function that takes in a number
function reverseArray(num) {
    //make number a string and split that faka
     let numArray = num.toString().split('').reverse()
    //reverse array 
    return parseInt(numArray)

    //make array integers again and return
    reverseArray(9238) //should return [8,3,2,9]
    console.log(reverseArray(330))
    // can't do it this way, have to use map

    function reverseArray(num) {
        //make number a string and split
        let numArray = num.toString().split('').reverse()
        //reverse array
        //make array integers again and return
        return numArray.map(e=>parseInt(e))
    }
}
         //just needed to map through and make each string element into an integer
