const num = parseInt(prompt('enter the number to check if prime'))
let k = 0
for(let i = 2; i<num; i++){
  if(num%i === 0){
    k = 1
  }
}
if (k === 0){
  document.querySelector('#target').innerHTML = `${num} is a prime number`
}
else{
  document.querySelector('#target').innerHTML = `${num} is not a prime number`
}