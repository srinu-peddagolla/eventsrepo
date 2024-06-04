
function doCube() {
    //Getting value from t1
    let x = document.getElementById('t1').value
    //Getting value from t2
    let y = document.getElementById('t2').value

    let cube =  (x*x*x)+(y*y*y) + (3*(x*x*y)) +(3*(y*y*x)) 
    //Getting value to t3
    document.getElementById('t3').value = cube
  }
  function eraseData() {
    document.getElementById('t1').value = ""
    document.getElementById('t2').value = ""
    document.getElementById('t3').value = ""
  }
  