// Numbers

let val;

val = Number('10'); //10
val = parseInt('10'); //10
val = parseFloat('10.5'); //10.5
val = parseInt('a10a'); //NaN
val = isNaN('10'); //false
val = isNaN('a10'); //true

var num = 10.12456789;
val = num.toPrecision(6); //10.1246
val = num.toFixed(2); //10.12
val = Math.PI; //3.141592653589793
val = Math.round(2.4); //2
val = Math.round(2.7); //3
val = Math.ceil(2.4); //3
val = Math.ceil(2.6); //3
val = Math.floor(2.4); //2
val = Math.floor(2.7); //2
val = Math.sqrt(64); //8
val = Math.pow(2,4); //16
val = Math.abs(-100); //100
val = Math.min(1,2,3,2,4,9); //1
val = Math.max(4,5,6,4,98,7); //98
val = Math.floor(Math.random()*100+1); 

console.log(val);
console.log(typeof val);