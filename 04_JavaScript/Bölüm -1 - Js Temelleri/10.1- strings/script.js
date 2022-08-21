// Strings

const firstName = 'Fatih';
const lastName = "Deniz";
let hobbies = 'sinema spor kitap yazılım';
const age=35;

let val;

// string concatenation

val = firstName +" "+ lastName;
val = 'Fatih';
val +=' Deniz';

val = 'Benim adım '+firstName+' '+ lastName+ ' ve yaşım ' + age + ' Hagen\'de yaşıyorum.';

//string concat
val = firstName.concat(' ',lastName);

// string uppercase - lowercase
val = val.toUpperCase();
val = val.toLowerCase();

// string replace
val = '  '+val.replace('fatih','çınar')+'     ';

// trim
val = val.trim();

// substring 
// val = val.substring(3,8);

// slice
// val = val.slice(6); 

//val = val.indexOf('x');

//val = val[1];

//string length
//val = val.length;

val =hobbies.split(' ')

console.log(val);
console.log(typeof val);