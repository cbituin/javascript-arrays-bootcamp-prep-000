var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  //Both functions take two parameters, an array and an element to add to the beginning of the array, and both functions should add the element to the beginning of the array and then return the whole array.
  
  function addElementToBeginningOfArray(array, element){
    //should not alter the original arr
    var newArr = array.unshift(element);
    return newArr;
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element){
    //should alter the original arr
    array.unshift(element);
    return array;
  }