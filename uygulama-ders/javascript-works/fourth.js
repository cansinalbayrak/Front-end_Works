// Kullanılacak diziler
 const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
 const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.
dizi.forEach((num)=>console.log(num));


// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.

dizi.forEach((num)=>{if(num%2===0) {
    console.log(num);
    
}});

// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.

const arr = [];
 dizi.forEach((num)=> {
    arr.push(num*2);
});
console.log(arr);

// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
let sum =0;
dizi.forEach((num)=> {
    sum += num;
});
console.log(sum);


// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.,

let last;

dizi.forEach((num) => {
  console.log(num);
  last = num;

//   if (index === dizi.length - 1) {
//     last = num;
//     console.log(`${last} soon`);
//   }

});
console.log(`${last} soon`);





// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.

const arr2 = dizi1.map( str=> str.toUpperCase());

console.log(arr2);

// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.

const arr3 = dizi.map(num => num + Math.floor(Math.random() * 10) + 1);

console.log(arr3);


// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.

// Map döngüsü ile her kelimeyi ters çevirme

let str2 = "hello world";
const arr5 = str2.split(" ").map(word => word.split("").reverse().join(""));
console.log(arr5.join(" "));


const arr11 = dizi1.map(word => {
    return word.split("").reverse().join("");
  });
  console.log(arr11);

// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.

const arr7 = dizi.map(num => num.toString());

console.log(arr7);


// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.


const arr15 = dizi1.map(str => 
    {
        let a = "";
        for (let j = 0; j < str.length; j++) {
            for (let i = str.length - 1; i >= 0; i--) {
    
                str[j] = str[i];
            }
            a += str[j];
        }
        return a;
    });

console.log(arr15);

const arr10 = dizi1.map(str => 
{
    let a = "";
    for (let i = str.length - 1; i >= 0; i--) {

        a += str[i];
    }
    
    return a;
});

console.log(arr10);


// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.

const arr16 = dizi.filter(num => num % 2 === 0);
console.log(arr16);

// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.


const arr17 = dizi1.filter(word => word.length ===4);
console.log(arr17);

// ---------------reduce-------------------

// reduce tek bir çıktıya indirger. (func,0) 2. parametre inital value başlangıç değerdir. neyin üzerine ekliyorum?? eğer yazmazsan dizinin ilk elemanını baş. değer olarak alır.
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.
function sumNums(temp3, num) {
    return temp3 + num +2;
  }
const sum17 = dizi.reduce(sumNums,0);

console.log(sum17);


const sum20 = dizi.reduce((temp, sayi) => temp + sayi + 2,0);
console.log(sum20);


// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek

const first20 = dizi.find(num => num % 2 === 0);

console.log(first20);


// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek

const last5 = dizi.reverse().find(sayi => sayi % 2 === 0); // ya da findLast() kullan
console.log(last5);

// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek


const isNeg = dizi2.some(num => num < 0);
console.log(isNeg);


// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek


const b = dizi2.every(num => num > 0);
console.log(b);

// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek

dizi3.sort((num1, num2) => num1 - num2);
console.log(dizi3);



// 1- myObject isimli boş bir nesne oluşturun.

let myObject = {};

// 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin

myObject = {
    isim: "cansin",
    yas : 28,
    cinsiyet: "kadin",
    meslek: "dev",
};

// 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.

delete myObject.cinsiyet;

console.log(myObject);

// 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.

const copy = { ...myObject };
console.log(copy);

const copyOnj = Object.assign({},myObject); //2. yol. 3. parametre olarak 2 objeyi birleştirirsin.

// 5- nesnenizin anahtarlarını konsola yazdırın.
console.log('keys =', Object.keys(myObject))

for (const key in myObject) {
    console.log(key);
  }

// 6- nesnenizin değerlerini konsola yazdırın.
console.log('values =', Object.values(myObject))
for (const key in myObject) {
    console.log('value  ', myObject[key]);
  }

// 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.
console.log("-".repeat(20));
console.log(Object.keys(myObject), Object.values(myObject));
console.log(Object.entries(myObject));
    

for (const key in myObject) {
    console.log( key,myObject[key])
  }

// 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin

console.log(myObject.hasOwnProperty("isim"));

// 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.

// Object.freeze(myObject);
// myObject.isim = "can"; 

// console.log(myObject);

// 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.

console.log("-".repeat(20));

Object.seal(myObject);

myObject.isim = "can"; 
delete myObject.meslek; 

console.log(myObject);

// aşağıda verilen aracBilgileri nesnesi içerisinde bulunan her bir servis kayıdına ait tarih bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan aciklama ve ucret bilgilerini konsola yazdırın.
/*(örn çıktı: 
05.01.2020 balata değişimi - 1700 TL
05.01.2020 yağ değişimi - 700 TL
05.01.2020 boya koruma - 700 TL
...
...
...
28.08.2022 seramik kaplama - 4500 TL
)
*/

const aracBilgileri = {
    id: "audiA6_123",
    model: "audiA6",
    yil: 2019,
    renk: "kırmızı",
    servisKayitlari: [
      {
        id: "audiA6_123_1",
        tarih: "05.01.2020",
        km: 2500,
        ucret: 3000,
        detay: [
          {
            id: "audiA6_123_1_1",
            aciklama: "balata değişimi",
            ucret: 1700,
          },
          {
            id: "audiA6_123_1_2",
            aciklama: "yağ değişimi",
            ucret: 700,
          },
          {
            id: "audiA6_123_1_3",
            aciklama: "boya koruma",
            ucret: 600,
          },
        ],
      },
      {
        id: "audiA6_123_2",
        tarih: "25.06.2021",
        km: 10500,
        ucret: 5000,
        detay: [
          {
            id: "audiA6_123_2_1",
            aciklama: "balata değişimi",
            ucret: 2700,
          },
          {
            id: "audiA6_123_2_2",
            aciklama: "yağ değişimi",
            ucret: 1700,
          },
          {
            id: "audiA6_123_2_3",
            aciklama: "boya koruma",
            ucret: 600,
          },
        ],
      },
      {
        id: "audiA6_123_3",
        tarih: "28.08.2022",
        km: 25400,
        ucret: 10000,
        detay: [
          {
            id: "audiA6_123_3_1",
            aciklama: "balata değişimi",
            ucret: 3500,
          },
          {
            id: "audiA6_123_3_2",
            aciklama: "yağ değişimi",
            ucret: 2000,
          },
          {
            id: "audiA6_123_3_3",
            aciklama: "seramik kaplama",
            ucret: 4500,
          },
        ],
      },
    ],
  };

// her bir servis kayıdına ait TARİH bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan ACİKLAMA ve UCRET bilgilerini konsola yazdırın.
/*(örn çıktı: 
05.01.2020 balata değişimi - 1700 TL
*/
let date;
let desc;
let amount;
 aracBilgileri.servisKayitlari.forEach(kayit =>{
    date = kayit.tarih;
    kayit.detay.forEach(detay =>{
        desc = detay.aciklama;
        amount = detay.ucret;
        console.log(date,desc,amount);
    });
    
});

// student isimli bir nesne oluşturun ve içerisine 3 adet özellik ekleyin. Nesnenin özelliklerini `for...in` döngüsüyle dolaşan ve konsola yazdıran bir fonksiyon yazın.


let student = {
    name: "ali",
    surname: "veli",
    age: 25,
};

function PrintAtt(obj) {
    for (let att in obj) {
        console.log(att," : ", obj[att]);
    }
}
PrintAtt(student);


// İçerisinde 3 adet öğrenci nesnesi bulunan bir dizi oluşturun. her nesnenin kendisine ait isim ve not özellikleri bulunsun.(örn. {name: "Cem", grades: [80, 90, 50]}) Öğrencilerin ortalama notlarını `for...of` döngüsü kullanarak hesaplayın ve dersten geçip geçmedikleri bilgisini isimleriyle birlikte konsola yazdırın. (Geçer not 60)

let students = [
    { name: "ali", grades: [40, 50, 50] },
    { name: "veli", grades: [50, 80, 75] },
    { name: "ayse", grades: [60, 95, 75] }
];

let ort;
for (let stn of students) {
    ort = stn.grades.reduce((sum, grade) => sum + grade, 0) / stn.grades.length;

    console.log(ort >= 60 ? `${stn.name} geçti` : `${stn.name} kaldi`);
}
