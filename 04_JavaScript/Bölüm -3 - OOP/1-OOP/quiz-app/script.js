// OOP: Nesne Tabanlı Programlama
// Object

let soru = {
    soruMetni: "Hangisi javascript paket yönetim uygulasıdır?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "Typescript",
        c: "Npm"
    },
    dogruCevap: "c",
    cevabiKontrolEt: function(cevap) {
        return cevap === this.dogruCevap
    }
}

let soru2 = {
    soruMetni: "Hangisi .net paket yönetim uygulasıdır?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "nuget",
        c: "Npm"
    },
    dogruCevap: "b",
    cevabiKontrolEt: function(cevap) {
        return cevap === this.dogruCevap
    }
}

console.log(soru.soruMetni);
console.log(soru.cevabiKontrolEt("c"));
console.log(soru2.cevabiKontrolEt("b"));

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7