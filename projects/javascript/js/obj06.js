//생성자 정의 함수
function Car(name, color, speed){
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.speedup = function(){
        return this.speed+10;
    };
    this.speeddown=function(){
        return this.speed-10;
    };
}
var Hongcar = new Car('Sonata', 'blue', 100);
var cname=document.getElementById("carname");
cname.textContent="car name"+Hongcar.name;
var colname=document.getElementById("carcolor");
colname.textContent="car color"+Hongcar.color;
var cspeed=document.getElementById("carspeed");
cspeed.textContent="car speed"+Hongcar.speedup();

var Kimcar = new Car('Jeep', 'red', 80);
var cname=document.getElementById("carname2");
cname.textContent="car name"+Kimcar.name;
var colname=document.getElementById("carcolor2");
colname.textContent="car color"+Kimcar.color



var cspeed=document.getElementById("carspeed2");
cspeed.textContent="car speed"+Kimcar.speedup();