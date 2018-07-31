var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  function addElementToBeginningOfArray(arr, arg){
    //add arg to beginning of arr
    //should not alter the original arr
    var newArr = arr.unshift(arg);
    return newArr;
  }
  
  function destructivelyAddElementToBeginningOfArray(arr, arg){
    //add arg to beginning of arr
    //should alter the original arr
    arr = arr.unshift(arg);
  }