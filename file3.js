var months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
var day = ["Sunday","Monday","Tuesday","Wednusday","Thrusday","Friday","Saturday"]
var d= new Date();
///////////////////
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
//////////////////
if(d.getHours() < 12 )
  {
    document.getElementById('demo').innerHTML="Good Morning !"; 
    document.getElementById('demo2').innerHTML= d.getMonth();
   document.getElementById('demo2').innerHTML= months[d.getMonth()];
  document.getElementById('demo3').innerHTML= d.getDate();
   document.getElementById('demo4').innerHTML= day[d.getDay()];
   document.getElementById('demo5').innerHTML= d.getHours();
   document.getElementById('demo6').innerHTML= d.getMinutes();
   document.getElementById('demo7').innerHTML= d.getSeconds();

  }
else if(d.getHours() < 15)
  {
    document.getElementById('demo').innerHTML="Good Afternoon";
       document.getElementById('demo2').innerHTML= months[d.getMonth()];
document.getElementById('demo3').innerHTML= d.getDate();
   document.getElementById('demo4').innerHTML= day[d.getDay()];
   document.getElementById('demo5').innerHTML= d.getHours();
   document.getElementById('demo6').innerHTML= d.getMinutes();
   document.getElementById('demo7').innerHTML= d.getSeconds();

  }
else if (d.getHours() > 15 )
  {
    document.getElementById("demo").innerHTML="Good Evening!";
   document.getElementById('demo2').innerHTML= months[d.getMonth()];
   document.getElementById('demo3').innerHTML= d.getDate();
   document.getElementById('demo4').innerHTML= day[d.getDay()];
   document.getElementById('demo5').innerHTML= d.getHours();
   document.getElementById('demo6').innerHTML= d.getMinutes();
   document.getElementById('demo7').innerHTML= d.getSeconds();  
  }

