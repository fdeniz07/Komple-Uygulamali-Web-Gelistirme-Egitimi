// yas >= 18
// mezuniyet == "lise" ya da mezuniyet == "üniversite"

let mezuniyet = "üniversite";
let yas = 20;

if (yas >= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")) {
    console.log("ehliyet alabilir");
} else {
    console.log("ehliyet şartları tutmuyor.")
}

// and 
// true , true => true
// true , false => false

// or
// true, true => true
// true, false => true
// false, false => false

let username = "fatihdeniz";
let password = "1234";

if (username == "fatihdeniz") {
    if (password == "12345") {
        console.log("uygulamaya giriş yapıldı.");
    } else {
        console.log("parola yanlış.");
    }
}
else {
    console.log("kullanıcı adı yanlış.");
}

// if (!isLoggedin) {
//     console.log("merhaba");
// }
