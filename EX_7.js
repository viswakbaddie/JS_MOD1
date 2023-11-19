const dice = parseInt(prompt('enter how many times die needs to be rolled'))
let sum = 0
for (let i = 0; i<dice; i++){
   let roll = Math.floor(Math.random()*6)+1
    sum = sum + roll
}
document.querySelector('#target').innerHTML = `The sum = ${sum}`