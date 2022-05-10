// Ders 4 : Tür Dönüşümü
let num1 = "5";
let num2 = "10";
console.log(num1 + num1);
console.log(typeof num1);

let num3 = Number("5");
let num4 = Number("10");

let total = num3 + num4;
console.log(total);
console.log(typeof total);

let val;

// number to string
val = String(10);

console.log(val);
console.log(typeof val);
console.log(val.length);

// bool to string
let val2 = String(true);

console.log(val2);
console.log(typeof val2);
console.log(val2.length);

// date to string
let val3 = new Date();

console.log(val3);
console.log(typeof val3);
console.log(val3.length);

let val4 = String(new Date().getDay());

console.log(val4);
console.log(typeof val4);
console.log(val4.length);

// val = String(new Date())

// array to string
let val5 = String([1, 2, 3, 4]);

console.log(val5);
console.log(typeof val5);
console.log(val5.length);

// toString()
let val6 = (10).toString();
val6 = false.toString();

console.log(val6);
console.log(typeof val6);
console.log(val6.length);

// string to number
let val7 = Number("10");

console.log(val7);
console.log(typeof val7);
console.log(val7.toFixed(2));

// Bool to Number
let val8 = Number(true);
val8 = Number(false);

console.log(val8);
console.log(typeof val8);
console.log(val8.toFixed);

// Null to Number
let val9 = Number(null);

console.log(val9);
console.log(typeof val9);
console.log(val9.toFixed(2));

// Not a Number to Number
let val10 = Number("a");

console.log(val10);
console.log(typeof val10);
console.log(val10.toFixed(2));

let val11 = Number([1, 2, 3, 4]);

console.log(val11);
console.log(typeof val11);
console.log(val11.toFixed(2));

// parseInt
// parseFloat

let val12 = parseInt("10");

console.log(val12);
console.log(typeof val12);
console.log(val12.length);

let val13 = parseInt("10.5");

console.log(val13);
console.log(typeof val13);
console.log(val13.length);

let val14 = parseFloat("10.5");

console.log(val14);
console.log(typeof val14);
console.log(val14.length);
