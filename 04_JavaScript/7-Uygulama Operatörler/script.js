// Demo : Operators

// 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)

let IndexCan;
let IndexAda;

const kgCan = 60;
const kgAda = 40;

const heigtCan = 1.7;
const heigtAda = 1.5;

IndexAda = kgAda / (heigtAda * heigtAda);
IndexCan = kgCan / (heigtCan * heigtCan);

console.log(IndexAda.toFixed(2), IndexCan.toFixed(3));

let adaHigherIndex = IndexAda > IndexCan;
let canHigherIndex = IndexCan > IndexAda;

console.log(
  "Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük : " + adaHigherIndex
);

console.log(
  "Can'ın kilo indeksi ada'nın kilo indeksinden daha büyük : " + canHigherIndex
);

let AdaZayif = IndexAda >= 0 && IndexAda <= 18.4;
let AdaNormal = IndexAda >= 18.5 && IndexAda <= 24.9;
let AdaKilolu = IndexAda >= 25 && IndexAda <= 29.9;
let AdaSisman = IndexAda >= 30 && IndexAda <= 34.9;

console.log("Ada zayıf :" + AdaZayif);
console.log("Ada'nın kilosu normal : " + AdaNormal);
console.log("Ada kilolu mu : " + AdaKilolu);
console.log("Ada şişman mı : " + AdaSisman);
