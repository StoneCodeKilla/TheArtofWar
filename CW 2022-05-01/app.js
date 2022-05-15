//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

//Return the average of the given array rounded down to its nearest integer.

//The array will never be empty.

//P - arr will never be empty. will it always be nums as elements
//R - Average of array rounded down
//E - 
//P - 
//make function that takes in an array
function sumRoundDown(arr){
    //reduce our arr
    let newArr = arr.reduce((acc,c)=>acc+c)
    //divide our arr by length and also Math.floor that biatch
    return Math.floor(newArr/arr.length)
}




//reduce(sum) then divide by length

console.log(sumRoundDown([1, 25.6]),13)
console.log(sumRoundDown([1,2.2,3,4.1]),2)