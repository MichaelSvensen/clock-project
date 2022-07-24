//
// document.querySelector("h1").style.color="red";


function checkTime(i){
  if (i < 10){
    i = "0"+i;
  }
  return i
}


function showTime(){

var date = new Date();

var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();

h = checkTime(h);
m = checkTime(m);
s = checkTime(s);


var month = date.toLocaleString('default', {month:'long'});

var date = (date.getDate() + " " + month +" " + date.getFullYear());

var time = h + ":" + m + ":"+s;



document.querySelector("p").innerHTML = date;
document.getElementById("MyClock").innerText=time;

document.getElementById("MyClock").textContent=time;

setTimeout(showTime, 1000);
}

showTime();
