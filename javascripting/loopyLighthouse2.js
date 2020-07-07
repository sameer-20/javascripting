function loopyLighthouse (range, multiples, words){

  let arr = [];

  if(range[0] === '' || range[1] === '' || range[0] > range[1])
    return -1;
  else if (multiples[0] === '' || multiples[1] === '')
    return -1;
  else if (words[0] === '' || words[1] === '')
    return -1; 

  for(let i = range[0]; i <= range[1]; i++){
    if (i % multiples[0] === 0 && i % multiples[1] === 0)
      arr.push(words[0] + words [1]);
    else if (i % multiples[1] === 0)
      arr.push(words[1]);
    else if (i % multiples[0] === 0)
      arr.push(words[0]);
    else
      arr.push(i);
  }

  //return arr;
  for (let j = 0; j < arr.length; j++)
    console.log(arr[j]);
  
  return;  
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));