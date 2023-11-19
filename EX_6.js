let ch = confirm('should i calculate square root')
if (ch){
  let no = parseInt(prompt('enter number'))
  if (no>=0){
    let sqrt = no**0.5
    document.querySelector('#target').innerHTML = `square root is:${sqrt}`
  }
  else{
    document.querySelector('#target').innerHTML = `The square root of a negative number is not defined`
  }
}
else{
  document.querySelector('#target').innerHTML = `The square root is not calculated`
}