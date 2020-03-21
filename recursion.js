let wr = (msg='---------') => console.log(`<br>${msg}`);

function basicRecursion(max, current) {
  if(current > max) return;
  wr(current);
  basicRecursion(max, current+1);
}
console.log(basicRecursion(5,1))
console.log(wr())
console.log(wr())

function fibonacci(n){
 if(n<=2) {
   return 1
 }
 else {
   return fibonacci(n - 1) + fibonacci(n - 2);
 }
}

for(var i = 1; i <= 20; i++) {
  wr(`${i}. ${fibonacci(i)}`)
}

// factorials
function factorial(m) {
  if (m === 1) return 1;
  return m * factorial(m-1);
}
console.log(factorial(5));

// range
const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
console.log(sumRange(5));

const countDown = t => {
  if (t <= 0) {
    return;
  }
  t--;
  countDown(t);
}
console.log(countDown(10));
