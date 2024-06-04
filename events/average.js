function doSum(){
    //Getting value from t1
 let a= document.getElementById('t1').value
 //Getting value from t2
 let b= document.getElementById('t2').value
  //Getting value from t3
  let c= document.getElementById('t3').value
  //Getting value from t4
  let d= document.getElementById('t4').value
   //Getting value from t5
 let e= document.getElementById('t5').value
 //Getting value from t6
 let f= document.getElementById('t6').value
 let sum =eval(a) + eval(b)+ eval(c)+ eval(d)+ eval(e)+ eval(f)
 let avg = sum/6;
 //Setting value to alert
 alert(sum)
 alert(avg)
 document.getElementById('t7').value = sum
 document.getElementById('t8').value = avg
 
}

function eraseData(){
  document.getElementById('t1').value = ""
  document.getElementById('t2').value = ""
  document.getElementById('t3').value = ""
  document.getElementById('t4').value = ""
  document.getElementById('t5').value = ""
  document.getElementById('t6').value = ""
}