// Loops

// for loop

for (let i = 1; i <= 10; i++) {

    if (i == 3) {
        console.log('en sevdiğim rakam :' + i);
        continue;
    }

    if (i == 6) {
        console.log('en sevmediğim rakam : 6');
        break;
    }

    console.log(i);
}

let sayilar = [1, 2, 5, 7, 10, 15, 25, 450];
let toplam = 0;


for (let i in sayilar) {
    toplam += sayilar[i];
}
console.log(toplam); //515


// while loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}


let k = 0;
while (k < 10) {
    console.log(k);
    i++;
}

// do-While loop

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10)


let sonuc = 1;
for (let i = 10; i > 0; i--) {
    if (i % 2 == 1) {
        sonuc *= i;
    }
}

// console.log(sonuc);

let val = '\n';
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        val += '* ';
    }
    val += '\n';
}

console.log(val);