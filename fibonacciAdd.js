function fibonacci(input) {
  let a = 0,b = 1;
  let c = [0,1];
  let result = 0;
  for(let i = 3; i< input ;i++) {
    let d = a + b;
    c.push(d);
    a = b;
    b = d;
  }
  console.log(c);
  for(let k = 0; k<c.length; k++) {
    result += c[k]
  }
  return console.log(result);
}

fibonacci(9);

//0,1,1,2,3,5 = 12;

function fibonacciRepeat(input) {
  let result = 0, count = 0;
  let a = 0, b = 1;let c= [];
  while(input>=a) {
    c.push(a);
    let d = a+b;
    a = b;
    b  = d;
  }
  return console.log(c);
}

fibonacciRepeat(55);
