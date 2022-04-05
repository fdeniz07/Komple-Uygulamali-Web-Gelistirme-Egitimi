//Date Object

let d = new Date();
let birdthday = new Date(1970, 10, 15);

//Set MEthods
d.setFullYear(2023);
d.setMonth(5);
d.setDate(20);
d.setHours(10);
d.setMinutes(30);
d.getSeconds(20);

//Get Methods

console.log(d.getDate());
console.log(d.getDay()); //Haftanin günü, 0 Pazar
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth()); //Yilin ayi, ocak 0
console.log(d.getMinutes());
console.log(d.getSeconds());

console.log(d.getFullYear() - birdthday.getFullYear());
console.log(d.getMonth() - birdthday.getMonth());
console.log(d.getDate() - birdthday.getDate());

console.log(d);
console.log(typeof d);
