
let a = 10;
let b = 5;

console.log("---------- Before Swapping -------------")
console.log(a, b);
const temp = a;

console.log("------------ After Swapping ------------")
a = b;
b = temp;
console.log(a, b);

//---------- Destructing ------------
let x = 43, y = 56;
console.log(x, y);
[x, y] = [y, x];

console.log(x, y);
