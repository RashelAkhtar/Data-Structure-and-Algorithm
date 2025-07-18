// ===> Sort and Merged Arrays

function sortedMergedArray (arr1 = [], arr2 = []) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  // Compare elements and push the smaller one
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          mergedArray.push(arr1[i]);
          i++;
      } else {
          mergedArray.push(arr2[j]);
          j++;
      }
      
  }
  
  // Add remaining elements
  while (i < arr1.length) {
     mergedArray.push(arr1[i]);
         i++;
  }
  
  while (j < arr2.length) {
     mergedArray.push(arr2[j]);
         j++;
  }
  
  console.log(mergedArray);
  return mergedArray;

}

sortedMergedArray([0, 3, 4, 31], [2, 5, 9, 30])


//----------------------------------------OR-----------------------------------------------OR--------------------------------------------------------------------


function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //Check Input
    if (array1.length === 0) return array2;
    if (array2.length === 0) return array1;
    
    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    
    console.log(mergedArray);
    return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [2, 6, 30]);

