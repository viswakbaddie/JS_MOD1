const dice = parseInt(prompt('enter number of dice'))
const sum = parseInt(prompt('enter desired sum'))
let k = 0
for(let i = 0; i<=10000; i++){
  let sum1 = 0
  for(let j = 0; j<dice; j++){
    let number = Math.floor(Math.random()*6)+1
    sum1 = sum1 + number
  }
  if (sum1 === sum){
    k = k + 1
  }
}
const prob = k/10000 * 100
document.querySelector('#target').innerHTML = `Probability to get sum ${sum} with ${dice} dice is ${prob.toFixed(2)}%`