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

// 1- Primitive Types

// a- String
let firstName = "Fatih";
console.log(typeof firstName);

// b- Number
let age = 20;
let money = 100.5;

console.log(typeof age);
console.log(typeof money);

// c- Boolean
let isActive = true;

console.log(typeof isActive);

// d- Null
let job = null;

console.log(typeof job);

// e- Undefined
let car;
console.log(typeof car);

//2-  Reference Types - Objects

// a- Array
let names = ["Ali", "Ahmet", "Can"];
console.log(typeof names);

// b- Object
let address = {
  city: "Antalya",
  country: "Türkiye",
};

console.log(typeof address);

// c- Function
var calculateAge = function () {
  return 0;
};
console.log(typeof calculateAge);
