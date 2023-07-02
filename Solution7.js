var k=0,
m = 0,
l=0;
function oddNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if((item % 2!==0) && (typeof(item) === 'number')) {
      k=k+1;
    }
  }
} 
function evenNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if(item % 2===0) {
      m=m+1;
    }
  }
} 
function notNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if(typeof (item) !== 'number') {
      l=l+1;
    }
  }
} 
let numbers = [1, 2, 3, 45, 5];
oddNumbers(numbers);
evenNumbers(numbers);
notNumbers(numbers);
console.log('нечетные числа =', k);
console.log('четные числа =', m);
console.log('Другое=', l)