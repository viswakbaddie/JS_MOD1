const start = parseInt(prompt('enter start year'))
const end = parseInt(prompt('enter end year'))
for(let i=start+1; i<end; i++){
  document.querySelector('#target').innerHTML += `<li>${i}</li>`
}