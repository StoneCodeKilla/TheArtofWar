//You are given an array with positive numbers and a non-negative number N. 
//You should find the N-th power of the element in the array with the index N. 
//If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Example: [1,2,3,4] and N = 2.... the result is 3^2 === 9 

function index(array, n){
    return isNaN(array[n] ** n) ? -1 : array[n] ** n
  }

  // Could also do 
  //function index(array, n) {
  //    return array[n] ** n || -1
  //}