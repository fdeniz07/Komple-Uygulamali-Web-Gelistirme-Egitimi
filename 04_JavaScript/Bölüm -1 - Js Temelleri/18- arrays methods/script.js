let ogrenciler = ["çınar","yiğit","ada"];

sonuc = ogrenciler.length;

// // get array item
console.log(ogrenciler[0])
console.log(ogrenciler[3])

// array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");

// eleman silme - remove item
sonuc = ogrenciler.pop();       // son eleman silinir ve silinen eleman geri döndürülür.
sonuc = ogrenciler.shift();     // ilk eleman silinir.

// eleman ekleme - add item
sonuc = ogrenciler.push("sena");    // dizinin sonuna eleman eklenir.
sonuc = ogrenciler.unshift("sena");

// set array item
ogrenciler[ogrenciler.length]='emel'; // Dizinin sonuna eleman ekler

//indexof
let index = ogrenciler.indexOf('ada');
console.log(' index : '+index);

// reverse
ogrenciler.reverse();

// sort
ogrenciler.sort();

console.log(ogrenciler);
console.log(typeof ogrenciler);


let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

//concat
sonuc = markalar1.concat(markalar2, markalar3);

// splice
sonuc = markalar1.splice(0, 1, "bmw","audi");
sonuc = markalar1.splice(0, 1);

console.log(sonuc);
console.log(markalar1);


let years = [2017,1970,1990,1998];

function over18(year){
    let age = 2018 - year;
    return age>=18;
}

// find
let val2 = years.find(over18);

// filter
let val = years.filter(over18);


