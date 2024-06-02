submitBtn.onclick = function (){

let maths = document.getElementById("maths").value;
let physics = document.getElementById("physics").value;
let chemistry = document.getElementById("chemistry").value;
  a = (maths/ 2);
  b =(physics/ 4);
  c =(chemistry/ 4);
  d=a+b+c;
document.getElementById("value1")
.value=d*2;
  
}