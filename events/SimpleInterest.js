
function doInterest() {
    //Getting value from t1
    let x = document.getElementById('t1').value
    //Getting value from t2
    let y = document.getElementById('t2').value
     //Getting value from t3
    let z = document.getElementById('t3').value
    let interest = (eval(x) * eval(y) * eval(z))/100;
    //Setting value to t4
    document.getElementById('t4').value = interest
  }
  function eraseData() {
    document.getElementById('t1').value = ""
    document.getElementById('t2').value = ""
    document.getElementById('t3').value = ""
    document.getElementById('t4').value = ""
  }
  