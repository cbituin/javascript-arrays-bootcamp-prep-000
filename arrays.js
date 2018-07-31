var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  //Both functions take two parameters, an array and an element to add to the beginning of the array, and both functions should add the element to the beginning of the array and then return the whole array.
  
  function addElementToBeginningOfArray(arr, arg){
    //add arg to beginning of arr
    //should not alter the original arr
    arr.unshift(arg);
    return arr;
  }
  
  function destructivelyAddElementToBeginningOfArray(arr, arg){
    //add arg to beginning of arr
    //should alter the original arr
    arr = arr.unshift(arg);
    return arr;
  }