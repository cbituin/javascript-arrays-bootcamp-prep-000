var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  function addElementToBeginningOfArray(arr, arg){
    //add arg to beginning of arr
    //should not alter the original arr
    arr.unshift(arg);
    
  }
  
  function destructivelyAddElementToBeginningOfArray(arr, arg){
    //add arg to beginning of arr
    //should alter the original arr
    arr = arr.unshift(arg);
  }