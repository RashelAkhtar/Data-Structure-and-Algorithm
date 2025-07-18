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


