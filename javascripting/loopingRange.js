function range (start, end, step){
  let arr = [];
  let i = start;

  if (start === '' || end === '' || step === '')
    return arr;
  else if (start > end)
    return arr;
  else if (step < 0 || step === 0)
    return arr;    

  while (i <= end){
    arr.push(i);
    i += step;
  }
  return arr;    
} 

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range( '', 10, 2));
console.log(range( 5, '', 2));
console.log(range( 5, 100, ''));
console.log(range( 500, 100, 10));
console.log(range( 5, 100, 0));