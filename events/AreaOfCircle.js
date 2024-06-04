
function doArea() {
    //Getting value from t1
    let r = document.getElementById('t1').value

    let area =  (3.14)*(r*r)
    //Getting value to t3
    document.getElementById('t2').value = area
  }
  function eraseData() {
    document.getElementById('t1').value = ""
    document.getElementById('t2').value = ""
  }
  