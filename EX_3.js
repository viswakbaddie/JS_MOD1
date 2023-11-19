'use strict'
let sum = 0;
let product = 1;
let avg = 0;
for(let i = 0; i<3; i++){
  let a = parseInt(prompt('enter number'))
  sum = sum + a;
  product = product * a;
}
avg = sum/3
document.querySelector('#sum').innerHTML = `sum is = ${sum}`;
document.querySelector('#product').innerHTML = `product is = ${product}`;
document.querySelector('#average').innerHTML = `average is = ${avg}`;