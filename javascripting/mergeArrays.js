
function merge (arr1, arr2){
  let arr3 = [];
  
  for (let i = 0; i < arr1.length; i++)
    arr3.push(arr1[i]);
  for (let j = 0; j < arr2.length; j++)
    arr3.push(arr2[j]);  
  
  return arr3.sort();
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));