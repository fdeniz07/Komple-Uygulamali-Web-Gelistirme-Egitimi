let ad = "Fatih";
let soyad = "Deniz";
let yas = 36;
let sehir = "Hagen";

// string concatenation

let mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + '\'de yaşıyorum.' + 'Emekliliğe ' + (65 - yas) + ' yılım kaldı.';

// backtick
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.Emekliliğe ${65 - yas} yılım kaldı.`;

// ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65 - yas) + " yıl kaldı." : "Zaten emekli oldunuz.";
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.${emeklilik}`;

console.log(mesaj);