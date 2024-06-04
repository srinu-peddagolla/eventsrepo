function doSum() {
  //Getting value from t1
  let x = document.getElementById('t1').value
  //Getting value from t2
  let y = document.getElementById('t2').value
  let sum = eval(x) + eval(y)
  //Setting value to t3
  document.getElementById('t3').value = sum
}
function doSub() {
  let x = document.getElementById('t1').value
  let y = document.getElementById('t2').value
  let sub = eval(x) - eval(y)
  document.getElementById('t3').value = sub
}
function doMul() {
  let x = document.getElementById('t1').value
  let y = document.getElementById('t2').value
  let mul = eval(x) * eval(y)
  document.getElementById('t3').value = mul

}
function doDiv() {
  let x = document.getElementById('t1').value
  let y = document.getElementById('t2').value
  let div = eval(x) / eval(y)
  document.getElementById('t3').value = div
}
function doMod() {
  let x = document.getElementById('t1').value
  let y = document.getElementById('t2').value
  let mod = eval(x) % eval(y)
  document.getElementById('t3').value = mod
}

function eraseData() {
  document.getElementById('t1').value = ""
  document.getElementById('t2').value = ""
  document.getElementById('t3').value = ""
}