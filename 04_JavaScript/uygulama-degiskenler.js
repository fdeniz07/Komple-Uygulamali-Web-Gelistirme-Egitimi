// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri tc kimlik
// ** Müşteri sipariş toplamı
// ** Müşteri cinsiyet
// ** Müşteri adres bilgisi
// ** Müşteri hobiler

var customerName = "John";
var customerLastName = "Wick";

var fullName = "John Wick";
var customerId = "1231231231243";

var total = 205.6;
var gender = "true"; //man - true / woman - false

var address = {
  city: "Izmir",
  district: "Alsancak",
  body: "Adnan Menderes Mah. No:50",
};

// array
var hobbies = ["Sinema", "Kitap", "Spor"];

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.

var order1 = Number("100");
var order2 = Number("150");

var totalOrder = order1 + order2;
console.log(totalOrder);

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.

var order3 = Number("100.2");
var order4 = Number("150.5");

var totalOrder2 = order3 + order4;
console.log(totalOrder2);

// ** Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız.

var order4 = parseInt("100.2");
var order5 = parseInt("150.5");

var totalOrder3 = order4 + order5;
console.log(totalOrder3);

// ** Aşağıda verilen doğum yılına göre yaş hesaplayınız.

const yearOfBirth = 1986;
console.log(new Date().getFullYear() - yearOfBirth);

// ** Aşağıdaki string ifadenin karakter sayısını bulunuz.

let course = "Modern Javascript Kursu";
console.log(course.length);
