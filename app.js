// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// PREP - Parameters - Is it always going to be integers?
// Return - Return a new arr with each value doubled
// Example - If we are given [2,3,4], should return [4,6,8]
//           If we are given [4,5,6], should return [8,10,12]
// Psuedocode - Make a function that takes in an array
function doubled(arr){
    return arr.map(element => element * 2)
}

// map through the array and multiply each element by 2. also return