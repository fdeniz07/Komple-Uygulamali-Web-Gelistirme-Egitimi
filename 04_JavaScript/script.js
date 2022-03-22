// Ders 1

// console.log("Merhaba");
// console.log(1234);
// console.log(true);
// console.log([1, 2, 3]);
// console.error("Hata olustu");
// console.warn("bir uyari olustu");

// //tek satirlik yorum satiri

// /*
// yorum satirlari
// yorum satirlari
// yorum satirlari

// */

// console.clear();

//Ders 2:  Degiskenler

// var age;
// console.log(age);

// age = 20;
// console.log(age);

// var fullname = "Fatih Deniz";
// console.log(fullname);

// fullname = "Ahmet Demir";
// console.log(fullname);

// // Degisken Tanimlama Kurallari

// // Sayisal ifade ile baslanamaz
// var yas1;
// var _yas2;
// var $yas3;

// // Komut isimleriyle tanimlama yapilamaz
// //Birden fazla kelime iceriyorsa

// var ad = "Fatih";
// var soyad = "Deniz";

// var ad_soyad = "Fatih Deniz";
// var adSoyad = "Ahmet Demir";

// // Case sensitive (büyük küvük duyarliligi)
// var firstName = "Fatih";
// var FirstName = "Deniz";

// console.log(firstName);
// console.log(FirstName);

// //var, let, const
// /*
// Var ve let ayni sekilde kullanilir. Sadece fark scope kullanimina göre degisiklik gösterilir. Her ikisinde de degisken atamasi sonradan degisitirilebilir

// let degiskeninde ise, degisken atamasi sabit ise kullanilir. Bu degiskenin degeri sonradan degistirilemez
// */

// let city = "Antalya";
// console.log(city);

// city = "Istanbul";
// console.log(city);

// const email = "abc@gmail.com";
// console.log(email);

// email = "bcd@gmail.com";
// console.log(email);

// Ders 3 : Degisken Tipleri

// // 1- Primitive Types

// // a- String
// let firstName = "Fatih";
// console.log(typeof firstName);

// // b- Number
// let age = 20;
// let money = 100.5;

// console.log(typeof age);
// console.log(typeof money);

// // c- Boolean
// let isActive = true;

// console.log(typeof isActive);

// // d- Null
// let job = null;

// console.log(typeof job);

// // e- Undefined
// let car;
// console.log(typeof car);

// //2-  Reference Types - Objects

// // a- Array
// let names = ["Ali", "Ahmet", "Can"];
// console.log(typeof names);

// // b- Object
// let address = {
//   city: "Antalya",
//   country: "Türkiye",
// };

// console.log(typeof address);

// // c- Function
// var calculateAge = function () {
//   return 0;
// };
// console.log(typeof calculateAge);

// Ders 4 : Tür Dönüsümü

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
val2 = String(true);

console.log(val2);
console.log(typeof val2);
console.log(val2.length);

// date to string
val3 = new Date();

console.log(val3);
console.log(typeof val3);
console.log(val3.length);

val4 = String(new Date().getDay());

console.log(val4);
console.log(typeof val4);
console.log(val4.length);

// array to string
val5 = String([1, 2, 3, 4]);

console.log(val5);
console.log(typeof val5);
console.log(val5.length);

// toString()
val6 = (10).toString();
val6 = false.toString();

console.log(val6);
console.log(typeof val6);
console.log(val6.length);

// String to Number
val7 = Number("10");

console.log(val7);
console.log(typeof val7);
console.log(val7.toFixed(2));

// Bool to Number
val8 = Number(true);
val8 = Number(false);

console.log(val8);
console.log(typeof val8);
console.log(val8.toFixed);

// Null to Number
val9 = Number(null);

console.log(val9);
console.log(typeof val9);
console.log(val9.toFixed(2));

// Not a Number to Number
val10 = Number("a");

console.log(val10);
console.log(typeof val10);
console.log(val10.toFixed(2));

val11 = Number([1, 2, 3, 4]);

console.log(val11);
console.log(typeof val11);
console.log(val11.toFixed(2));

// parseInt
// parseFloat

val12 = parseInt("10");

console.log(val12);
console.log(typeof val12);
console.log(val12.length);

val13 = parseInt("10.5");

console.log(val13);
console.log(typeof val13);
console.log(val13.length);

val14 = parseFloat("10.5");

console.log(val14);
console.log(typeof val14);
console.log(val14.length);
