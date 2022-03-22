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

// Degiskenler

var age;
console.log(age);

age = 20;
console.log(age);

var fullname = "Fatih Deniz";
console.log(fullname);

fullname = "Ahmet Demir";
console.log(fullname);

// Degisken Tanimlama Kurallari

// Sayisal ifade ile baslanamaz
var yas1;
var _yas2;
var $yas3;

// Komut isimleriyle tanimlama yapilamaz
//Birden fazla kelime iceriyorsa

var ad = "Fatih";
var soyad = "Deniz";

var ad_soyad = "Fatih Deniz";
var adSoyad = "Ahmet Demir";

// Case sensitive (büyük küvük duyarliligi)
var firstName = "Fatih";
var FirstName = "Deniz";

console.log(firstName);
console.log(FirstName);

//var, let, const
/*
Var ve let ayni sekilde kullanilir. Sadece fark scope kullanimina göre degisiklik gösterilir. Her ikisinde de degisken atamasi sonradan degisitirilebilir

let degiskeninde ise, degisken atamasi sabit ise kullanilir. Bu degiskenin degeri sonradan degistirilemez
*/

let city = "Antalya";
console.log(city);

city = "Istanbul";
console.log(city);

const email = "abc@gmail.com";
console.log(email);

email = "bcd@gmail.com";
console.log(email);
