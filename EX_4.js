`use strict`

name = prompt('enter your name')
const random = Math.floor(Math.random() * 4) + 1;
if (random === 1){
  document.querySelector('#target').innerHTML = `${name},you are Ravenclaw`
}
else if (random === 2){
  document.querySelector('#target').innerHTML = `${name},you are Gryffindor`
}
else if (random === 3){
  document.querySelector('#target').innerHTML = `${name},you are Hufflepuff`
}
else{
  document.querySelector('#target').innerHTML = `${name},you are Slytherin`
}
