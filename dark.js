/*
*update time : 2021/10/17
*author: SY
*/

function time(){
var t = new Date().getHours();
if (t >= 20 && t <= 6 || t === 20){
var obj = document.getElementById("css");
obj.setAttribute("href","dark.css");
}
}
