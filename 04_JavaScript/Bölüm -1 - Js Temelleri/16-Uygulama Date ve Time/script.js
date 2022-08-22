// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

var dt = new Date();

console.log(dt); //Mon Aug 22 2022 09:48:14 GMT+0200 (Mitteleuropäische Sommerzeit)
console.log(dt.getMonth() + 1); //8
console.log(dt.getDate()); //22
console.log(dt.getFullYear()); //2022

// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
var dtA = new Date('8/24/2010 14:50:10');
var dtB = new Date(2010, 7, 24, 14, 50, 10)

console.log(dtA); //Tue Aug 24 2010 14:50:10 GMT+0200 (Mitteleuropäische Sommerzeit)
console.log(dtB); //Tue Aug 24 2010 14:50:10 GMT+0200 (Mitteleuropäische Sommerzeit)

// 1/1/1990 tarihinden bir gün öncesini gösteriniz. 
var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1);
console.log(dtC); //Sun Dec 31 1989 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)

// iki tarih arasındaki geçen zamanı bulunuz.
var start = new Date('1/1/1990');
var end = new Date('2/10/1992');

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;

console.log('milisecond :' + milisecond) //milisecond :66528000000
console.log('saniye : ' + saniye); //saniye : 66528000
console.log('dakika :' + dakika); //dakika :1108800
console.log('saat :' + saat); //saat :18480
console.log('gun : ' + gun); //gun : 770

// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır ?

var annelerGunu = new Date();
annelerGunu.setHours(0, 0, 0, 0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while (annelerGunu.getDay() != 0) {
    annelerGunu.setDate(annelerGunu.getDate() + 1)
}
annelerGunu.setDate(annelerGunu.getDate() + 7);
console.log(annelerGunu); //Sun May 12 2019 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)

// ** Yaş hesaplama nasıl yapılır ?

var birthday = new Date('8/1/1985');
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1970); //37
console.log(birthday.getTime()); //491695200000
console.log(Date.now()) //1661154734185


var kurs = "Modern Javascript Dersleri: Baştan Sona Javascript Programlama";
var result = kurs.lastIndexOf("Javascript"); // result: 7

console.log(result) //40