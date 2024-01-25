// - Math.sqrt 
// - .toFixed 
// - Math.min 
// - Math.max 
// - Math.abs 
// - Math.pow 
// - .toPrecision
// - Math.floor 
// - Math.trunc 
// - Math.ceil 

// 1-) negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.

let a = -5;
let b = Math.abs(a);
console.log(b);


// 2-) ondalıklı bir sayıyı yukarıya yuvarlayın.

let c = 3.24;
console.log(Math.ceil(c));

// 3-) ondalıklı bir sayıyı aşağıya yuvarlayın.

console.log(Math.floor(c));

// 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.

let numbers = [6, 15, -7, 0, 80, -35];
//let maxN = Math.max.apply(Math,numbers);
let maxN1 = Math.max.apply(null,numbers);



let maxN = Math.max(6, 15, -7, 0, 80, -35)

console.log(maxN);


// 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.

let minN2 = Math.min.apply(undefined,numbers);

let minN = Math.min(6, 15, -7, 0, 80, -35)

console.log(minN);

// 6-) ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.

let x = 12.34567;

console.log(x.toFixed(3));


// 7-) bir sayının karekökünü bulun.

let y = 16;
console.log(Math.sqrt(16));

// 8-) bir sayının üstel fonksiyonunu bulun. (x üzeri y)

console.log(Math.pow(x,y))

// 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.

let z = 123.456789;

let k = z.toPrecision(6);

let t = z.toString().substring(0, 7);
console.log(t);


// 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.


let l = 123.456789;
//console.log(Math.round(l));
console.log(Math.trunc(l));

// 11-) Rastgele bir sayı üretin. (0 ile 100 arasında)

console.log(Math.floor(Math.random() *100));



//1- Bir sayı oluşturun ve bu sayının pozitif, negatif veya sıfır olduğunu kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.

let num = 0;

if (num < 0 ) {
    console.log("0 dan küçük")
} 
else if(num === 0)
{
    console.log("0 a eşit")
}
else
{
    console.log("0 dan büyük")
}

//2- İki farklı sayı oluşturun ve bu sayıların büyüklük ilişkisini kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.,

let num1 = 5;
let num2 = 12;

if (num1 > num2) {
    console.log(`${num1} sayisi ${num2} sayisindan büyük`)
} else if(num1 === num2){
    console.log(`${num1} sayisi ${num2} sayisina esit`)
}
else{
    console.log(`${num1} sayisi ${num2} sayisindan küçük`)
}

// 3- Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.

let word = "kayak";
//let reversedWord = word.split("").reverse().join("");

let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

if (word === reversedWord) {
    console.log(`${word} palindrom`);
} else {
    console.log(`${word} palindrom değil`);
}



// 4- Kullanıcıdan temsili bir oy verme ve aday olma durum sorgusu yapmak için yaş ve uyruk bilgisi alın. Aşağıdaki koşulları uygulayan bir if sorgusu yazın.

// a- Türk vatandaşı ve 30 yaşından büyük ise aday olabilir.
// b- Türk vatandaşı ve 18 yaşından büyük ise oy kullanabilir.
// c- Türk vatandaşı değilse ancak 18 yaşından büyük ise aday olamaz ama oy verebilir. 


let age = prompt("yas: ");
let ageN = parseInt(age);
let nat = prompt("uyruk: ");

if ((nat.includes("türk") || nat.includes("turk")) && ageN >30) {
    console.log("aday");
}
else if ((nat.includes("türk") || nat.includes("turk")) && ageN >18) {
    console.log("oy");
}
else if (!(nat.includes("türk") && nat.includes("turk")) && ageN >18) {
    console.log("aday olamazsin oy verebilirsin");
}
else
{
    console.log("hiç bir şey");
}


// Kullanıcıdan ay alıp girilen ayın kaç gün olduğunu yazdır

let moon = prompt("ay: ");

switch (moon) {
    case "ocak":
    case "mart":
    case "mayis":
    case "temmuz":
    case "ağustos":
    case "ekim":
    case "aralik":
        console.log(`${moon}  31`);
        break;
    case "nisan":
    case "haziran":
    case "eylül":
    case "kasim":
        console.log(`${moon}  30 `);
        break;
    case "şubat":
        console.log(`${moon}  28 `);
        break;
    default:
        console.log("hatalo giriş");
        break;
}



// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. yaratacağınız stokDurumu değişkenini stokta "Var" veya "Yok" olarak güncellesin. 

let brand = prompt("marka: ");
let color = prompt("renk: ");

let stok;

switch (brand) {
    case "bmw":
        switch (true) {
            case color==="siyah" || color ==="beyaz":
                stok = "var";
                break;
            default:
                stok = "yok";
                break;
        }
        break;
    case "mercedes":
        switch (true) {
            case color==="kirmizi" || color ==="beyaz":
                stok = "var";
                break;
            default:
                stok = "yok";
                break;
        }
        break;
    case "audi":
        switch (true) {
            case color==="gri" || color ==="sari":
                stok = "var";
                break;
            default:
                stok = "yok";
                break;
        }
        break;
    default:
        stok = "yok";
        break;
}

console.log(stok);

console.log("-".repeat(15))

//arrays

// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler

const myArray = ["cansin","albayrak", "28", true, "elma","armut","kivi","bezelye","lahmacun","nar"];

// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
myArray[0] = "can";
console.log(myArray);

// 3- dizinin uzunluğunu konsola yazdırın.

console.log(myArray.length);

// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.

let newLength = myArray.push("kedi"); //uzunluk dönüyor
console.log(myArray.indexOf("kedi")+1);


// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.

myArray.unshift("köpek"); //silinen elemanı dönüyor
console.log(myArray.indexOf("kedi")+1);

// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.

let deleted = myArray.pop();
console.log("Silinen ", deleted );


// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.

let deletedFirst = myArray.shift();
console.log("Silinen ", deletedFirst );

// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)

const newArray = [deleted, deletedFirst, newLength, deletedFirst.length];

// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.

let newArr1 = [...myArray, ...newArray];
console.log(newArr1);

let newArr2 = myArray.concat(newArray);
console.log(newArr2);


// 10- myArray içerisinde eleman olarak "Veli" var mı ?

console.log(myArray.includes("Veli"));

// 11- myArray içersinide 4.elemandan itibaren patates var mı?

let myArray2 = myArray.slice(3);
console.log(myArray2.includes("Patates"));


// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?

console.log(myArray.indexOf("elma"));

// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.

let tripleArr = newArray.slice(0,3);
console.log(tripleArr);

// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.
//index, howmany, item1, ....., itemX

tripleArr.splice(1,1);
tripleArr.splice(1,0,"dsş",2); //tek satırda da yapabilirsin, splice(1,1,"dsş",2)
console.log(tripleArr);

// 15- son diziniz 4 elemanlı olmuş olmalı. Bu dizi üzerinde 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin ÖRN: [1, 2, 3, 4] => [1, 'x', 4, 'y']

tripleArr.splice(1,1);
[tripleArr[1], tripleArr[2]] = [tripleArr[2], tripleArr[1]]; //splice ile de değiştirebilirsin
tripleArr.push("yeni");
console.log(tripleArr);

// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.

let arrToStr = tripleArr.join('+');
console.log(arrToStr);

console.log("-".repeat(15));



//cümledeki kelimelerin ters hallerini yazdıram func

let examp = "Bugün hava çok bulutlu"; 
console.log(examp);

function reverseFunc(param) {
    let wordss = param.split(' ');

    let reversed = wordss.map(function(wordd) {
         //for (let i = word.length - 1; i >= 0; i--) {
        //    reversedWord += word[i];
        //}
        return wordd.split('').reverse().join('');
    });
    return reversed.join(' ');
}

let result = reverseFunc(examp);
console.log(result);
