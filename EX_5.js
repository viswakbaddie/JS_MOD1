'use strict'
let year = parseInt(prompt('enter year'))
if (year%100===0){
  if (year%400===0){
    document.querySelector('#target').innerHTML = `leap year`
  }
  else{
    document.querySelector('#target').innerHTML = `not leap year`
  }
}
else if (year%4===0){
  document.querySelector('#target').innerHTML = `leap year`
}
else{
  document.querySelector('#target').innerHTML = `not leap year`
}
