let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let sonuc;

sonuc = kursAdi.toLowerCase(); //komple uygulamalı web geliştirme eğitimi.
sonuc = kursAdi.toUpperCase(); //KOMPLE UYGULAMALI WEB GELIŞTIRME EĞITIMI.
sonuc = kursAdi.length;  //41
sonuc = kursAdi[1]; //o
sonuc = kursAdi.slice(0, 6); //Komple
sonuc = kursAdi.slice(10); //ulamalı Web Geliştirme Eğitimi.
sonuc = kursAdi.slice(-10); //e Eğitimi.
sonuc = kursAdi.slice(-10, -5); //e Eği
sonuc = kursAdi.substring(0, 6); // Komple
sonuc = kursAdi.substring(10); //ulamalı Web Geliştirme Eğitimi.
sonuc = kursAdi.replace("Eğitimi", "Kursu"); //Komple Uygulamalı Web Geliştirme Kursu.
sonuc = kursAdi.trim(); //Komple Uygulamalı Web Geliştirme Eğitimi.
sonuc = kursAdi.trimEnd(); //Komple Uygulamalı Web Geliştirme Eğitimi.
sonuc = kursAdi.trimStart(); //Komple Uygulamalı Web Geliştirme Eğitimi.
sonuc = kursAdi.indexOf("Komple"); //0
sonuc = kursAdi.split(" "); // ['Komple', 'Uygulamalı', 'Web', 'Geliştirme', 'Eğitimi.']
sonuc = kursAdi.split(" ")[0]; //Komple
sonuc = kursAdi.split(" ")[3]; //Geliştirme

