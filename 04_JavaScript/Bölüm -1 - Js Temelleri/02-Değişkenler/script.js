//Ders 2: Değişkenler

var age;
console.log(age); // undefined

age = 20;
console.log(age); // 20

var fullname = "Fatih Deniz";
console.log(fullname); // Fatih Deniz

/*
 Değişken Tanımlama Kuralları
 ** Değişken isimleri rakam ile başlayamaz.
    var 1yas;  => hatalı
    var yas1;  => geçerli
    var _yas;  => geçerli
    var $yas3; => geçerli
    
 ** Komut isimleriyle tanımlama yapılamaz. Örneğin if kelimesi değişken ismi olamaz.

 ** Büyük küçük harf duyarlılığı (Case sensitive) vardır.
    var firstName = "Fatih";
    var FirstName = "Deniz";

    console.log(firstName);
    console.log(FirstName);

 ** Birden fazla kelime iceriyorsa
   var ad = "Fatih";
   var soyad = "Deniz";

   var ad_soyad = "Fatih Deniz";
   var adSoyad = "Ahmet Demir";  
    
 ** Değişken isimlerinde türkçe karakter kullanmamalıyız.   

 ** var, let, const Farklı değişken isimleridir.

      Var ve let ayni sekilde kullanilir. Sadece fark scope kullanimina göre degisiklik gösterilir. Her ikisinde de degisken atamasi sonradan degisitirilebilir
      
      const degiskeninde ise, degisken atamasi sabit ise kullanilir. Bu degiskenin degeri sonradan degistirilemez

   let city = "Antalya";
   console.log(city);

   city = "Istanbul";
   console.log(city);

   const email = "abc@gmail.com";
   console.log(email);

   email = "bcd@gmail.com";
   console.log(email);

*/
