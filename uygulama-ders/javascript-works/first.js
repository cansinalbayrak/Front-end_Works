// Kullanılan metotlar
/*
.indexOf
.substring
.trimEnd()
.includes
.replace
.trimStart()
.lastIndexOF
.toUpperCase
.replaceAll
.slice
.trim()
.length
.toLowerCase
*/

//UYGULAMA SORULARI
// -- Birkaç cümleden oluşan bir metin yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.


let myStory = "Hello ank-14 am cansin hello Cansin ank cansin 14 cansin Hello";

// 1- Yazdığınız hikayenin uzunluğunu yazdırın.
console.log(myStory.length);
// 2- Hikayenin toplam index sayısı kaçtır.
console.log(myStory.length-1);
// 3- string içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.
let str = "cansin";

let first = myStory.indexOf(str);
let last = myStory.lastIndexOf(str);

console.log(first);
console.log(last);

// 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)

let firstMethod = myStory.substring(0, 15);
let secondMethod = myStory.slice(0, 15);
console.log(firstMethod);
console.log(secondMethod);


// 5- 15. karakterden sonrasını yazdırın. 15 dahil. ( 2 farklı yöntem kullanarak)

let str1 = myStory.substring(myStory.length, 15 + 1); 
console.log(str1);

let str2 = myStory.slice(15, myStory.length); 
console.log(str2);

// 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)

let last51 = myStory.substring(myStory.length - 5);
console.log(last51);

let last52 = myStory.slice(-5);
console.log(last52);

// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.

let newd = myStory.substring(11, 21);
console.log(newd);

let newd2 = myStory.slice(11, 21);
console.log(newd2);

// 8- Son 5 karakter haric hikayenizi yazdırın.

let last1 = myStory.substring(0, myStory.length - 5);
console.log(last1);

let last2 = myStory.slice(0, -5);
console.log(last2);

// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.

let isContain = myStory.includes("cansin");
console.log(isContain);

// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.

let newstr = myStory.replace(/i/g, "ı");

console.log(newstr);

// 11- Hikayenizdeki ilk "a" karakterini "e" ye çevirin.

let newstr2 = myStory.replace("a", "e");

console.log(newstr2);

// 12- Bütün metni büyük harfe çevirin.

console.log(myStory.toUpperCase());

// 13- Bütün metni küçük harfe çevirin.

console.log(myStory.toLowerCase());

// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
//   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
//   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"  


let userName = prompt("name: ");
console.log("Hoşgeldin, " + userName);

console.log(`benim adim:  ${userName}`);


// 15- Kullanıcıdan gelen stringin başında ve sonunda boşluk olsun. 
//   a- Başındaki boşlukları kaldırın.
//   b- Sonundaki boşlukları kaldırın.
//   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.

let inputt = prompt("bosluklu:");

console.log(inputt.trimStart());
console.log(inputt.trimEnd()); 

let noSpace = inputt.trim();

console.log(noSpace);


// 16- Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.

let noChanged = `benim adim:  ${userName}`;

let abc = noChanged.split(" ");
let my = abc[0].toLocaleUpperCase('tr-TR') + " " + abc[1].charAt(0).toUpperCase() + abc[1].slice(1).replace("i", "ı") + " " + userName; 
console.log(my);

console.log("-".repeat(10));

let new1 = noChanged.replace("benim", 'BENİM');
let new2 = new1.replace("adim", 'Adım');
console.log(new2);

// 17- Ekrana tırnak içindeki mesajı ya da değişkendeki değeri yazdıran bir pop-up oluşturun. "Ara vakti. İyi dinlenmeler"

let message = "world";
alert(`helloo ${message}`);


//5-15 arası rnd
 console.log(Math.floor(Math.random() * (11))+5);


//TEORİ ÖDEV

// ÖDEV1: Bir stringin ilk harfini büyük, geri kalan harflerini küçük hale getirecek JS ifadesini yazın:
// "eMİn" => "Emin"
// "JoHN" => "John"
console.log("-".repeat(10))

let myStr = "eMİn";
let newMyStr = myStr.substring(0, 1).toUpperCase() + myStr.substring(1).toLowerCase();

console.log(newMyStr);

let firstChar = myStr.charAt(0).toUpperCase();
let lastChar = myStr.slice(1).toLowerCase();

let newMyStr2 = firstChar + lastChar;

console.log(newMyStr2);


// ÖDEV2: toUpperCase() kullanırken i => I karakterine dönüştürüldüğünü görüyoruz. Peki Türkçe diline uygun bir şekilde string'in bütün harflerini nasıl büyük hale getirebiliriz?

// "emir" => "EMİR"


let strWithTurkishChar = "ömür"

console.log(strWithTurkishChar.toLocaleUpperCase('tr-TR'));


let upperChar = strWithTurkishChar.replace(/ö/g, 'Ö').replace(/ü/g, 'Ü').toUpperCase();

console.log(upperChar);