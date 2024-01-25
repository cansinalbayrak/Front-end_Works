//kontrolleri yapma, algoritmaları yeter

// -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------
// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)


// let start = parseInt(prompt("baş: "));
// let end = parseInt(prompt("bit: "));

// if (start > end) {
//     start = parseInt(prompt(" hatalı baş: "));
//     end = parseInt(prompt(" hatalı bit: "));
// }

// let temp = 0;
// for (let i = start; i < end; i++) {
//   temp += i;
// }

// console.log(temp);


// -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.
// let nums = [50, 60, 70, 60, 80];

// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
// }

// let ort = sum/5;

// let count = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > ort) {
//         count++;
//     }
// }

// console.log(count);

// -------------------While - Sayı Tahmin uygulaması-----------------------
// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.

// const rndNum = Math.floor(Math.random() * 10) + 1;
// let remaining = 3;
// let guess;

// while (remaining > 0) {
//     guess = parseInt(prompt("tahmin: "));
    
//     if (guess === rndNum) {
//         alert(`doğruu!`);
//         break;
//     } else {
//         remaining--;
//         if (guess < rndNum) {
//             alert(`büyüt ve hakkin ${remaining}`);
//         } else {
//             alert(`küçült ve hakkin ${remaining}`);
//         }
//     }
// }

// if (remaining === 0) {
//     alert(`hak bitti sayi: ${rndNum}`);
// }

// -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// Kurallar:
// While döngüsü kullanılacak.
// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.

// let basket = 0;
// let temp1 =0;
// while (true) {
//     let str = prompt("ürün/onayla: ");
//     if (str === "onayla") {
//         alert(`toplam: ${basket}`);
//         break;
//     }
//     let x = parseInt(prompt("fiyat: "));
//     temp1 += x;

// }

// alert(`top: ${temp1}`);





// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak.


// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(5, 8));


// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.

const wordNum = (str) => {
    let words = str.split(' ');
    return words.length;
};

const examp = "hello world ben cansin";
console.log(wordNum(examp)); 


// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)

//dec yöntemi globaldir üstünde altında çağırabilirsin!!!!
function Fact(num7) {
    if (num7 === 1 || num7 === 0) {
        return 1;
    } else {
        return num7 * Fact(num7 - 1);
    }
}

const result3 = Fact(5);
console.log(result3); 



// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)

//ex yönetiminde func tanımalndıktan sonra çağırabilirsin !!!!!!!
const isPrime = function (x) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return "değil"; 
        }
    }
    return "asal";
};

console.log(isPrime(17));


// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.

function FindMaxNum(arr) {

    return Math.max(...arr);
}

const nums = [5, 7, 3, 8, 20, 5];
console.log(FindMaxNum(nums));


// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.

// reduce metodu araştır dene

function calculateSum(arr) {

    let sum6 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum6 += arr[i];
    }
    return sum6;
}

console.log(calculateSum(nums));


// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.

const FindMaxNum2 = (arr) => Math.max(...arr);

const calculateSum2 = arr => {
    let sum7 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum7 += arr[i];
    }
    return sum7;
};



// Buradan itibaren yalnızca arrow function kullanıyoruz.
// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.

const reverseStr = (str) => str.split('').reverse().join('');

console.log(reverseStr("hello world"));

// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın.

const mixArr = (arr) => {
    return arr.sort(() => Math.random()-0.5);
};

console.log(mixArr(nums));


// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)

const findDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
};

console.log(findDivisors(20));


// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.

const countChar = (str, char) => {
    const charCount = str.split(char).length - 1;
    return charCount;
};


console.log(countChar("merhaba dğnya ben cansin ckjlai dsnli cnasija", "i"));


// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.

const sumNum = (...numbers) => {
    let sum9 = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum9 += numbers[i];
    }
    return sum9;
};

console.log(sumNum(2,5,7));


//girilen sayı çitfse 2 ye böl, tekse 3 le çarpıp 1 ekle. sayı 1 olana kadar devam et. bu iterasyon sayısını döndür.

function calCount(num) {
    let count = 0;
    while (num !== 1) {
      if (num % 2 === 0) {
        num /= 2;
      } else {
        num = (num*3) + 1;
      }
      count++;
    }
  
    return count;
  }
  
  console.log(calCount(5)); 
  console.log(calCount(6)); 



  // a ve b parametreleri kabul eden bir func oluşturun. (neg de olabilir)
  //a eğer b den büyükse "a b den büyüktür", 
  //tam tersi ise "a b den küçüktür",
  //eğer ki a b ye eşitse, "a b ye eşittir"

  //çıktısını verecek func yazın. Ancak if, else, ternery operator, döngü, switch vb. koşulları kullanamazsınız. Bu func nasıl yazabilirdik?

  //deneme1

   function compareNums(num1, num2) {
    // let greaterStatus = num1 > num2;
    // let lessStatus = num1 < num2;
    // let equalStatus = num1 === num2;
    let diff = num1- num2;
    const greaterStatus = diff > 0;  
    const lessStatus = diff < 0;    
  
    const arrIndex = greaterStatus - lessStatus +1;
    const outputs = ["küçüktür", "eşittir", "büyüktür"];
  
    return `${num1} ${outputs[arrIndex]} ${num2}`;

  };
  console.log(compareNums(0,2));

//deneme2

  function compareNums2(num1, num2) {
    const result = (num1 > num2) - (num1 < num2);
    const index = ((result === 0) && 0) || (result + 1) //buradaki bitwise or değil js deki veya operatörü sol taraftaki doğruysa, sol taraftaki değeri döndürür. Eğer sol taraftaki ifade yanlışsa, sağ taraftaki ifadeyi döndürür!!!!!!!!!!!!!!
    const outputs = ["küçüktür", "eşittir", "büyüktür"];
    return `${num1} ${outputs[index]} ${num2}`;
  };

  console.log(compareNums2(5,2));


  //deneme3

 
  function compareNums5(num1, num2) {
    const diff = num1 - num2;               
    const status = Math.sign(diff);
    const outputs = ["küçüktür", "eşittir", "büyüktür"];
    return `${num1} ${outputs[status+1]} ${num2}`;
  }
  
  console.log(compareNums5(6,6)); 




//deneme4
  
    //Bitwise operatörleri, sayıları ikili (binary) biçimde işleyerek ve farklı bit düzeyindek< i işlemleri gerçekleştirerek çalışırlar.

    // ^ (XOR): Tek bir bit 1 ise sonuç 1, aksi takdirde 0. Her iki bit aynıysa 0.
    // << (Left Shift): Bitleri sola doğru kaydırır. Boşlukları sıfır ile doldurur.
    // >> (Right Shift): Bitleri sağa doğru kaydırır. İşareti korur, boşlukları işaret biti ile doldurur.
  

    //3 üçün binary hali 0000 0000 0000 0000 0000 0000 0000 0011  
    //31 adet kaydırması 0000 0000 0000 0000 0000 0000 0000 0000  


    //burası çalışmıyor GERİ DÖN VE DEENEEEEE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    //sayı 32 bit old için 31 birim sağa kaydırınca sayıyı kaybederiz. sonuç, işaret biti (en sol bit) ile doldurulan bir 32-bit 0 olacaktır. negatifde son bit 1 olacağından less -1 olur

  function compareNums4(num1, num2) {
    const diff = num1 - num2;              //b k e
    const equalStatus = !(diff ^ 0);       //0 0 1
    const greaterStatus = diff >> 31 & 1;  //0 1 0
    const lessStatus = -diff >> 31 & 1;    //1 0 0
  
    const statusIndex =  (equalStatus-1)*equalStatus + (greaterStatus+1)*greaterStatus + (lessStatus)  ;
    const outputs = ["eşittir", "büyüktür", "küçüktür"];
  
    return `${num1} ${outputs[statusIndex]} ${num2}`;
  }
  
  console.log(compareNums4(4,4)); 



  //DENEME5
 

// 0 olmayan tüm poz neg sayılar true dönüyor
// 0 a bölümden NaN gelir dolyısıyla 0 atar
function compareNums3(num1, num2) {
    const diff = num1 - num2;
    const absDiff = Math.abs(diff);
    console.log(diff/absDiff)

    const index = (diff / absDiff) || 0;
    const outputs = ["küçüktür", "eşittir", "büyüktür"];
    
    return `${num1} ${outputs[index + 1]} ${num2}`;
}

console.log(compareNums3(2,3));

