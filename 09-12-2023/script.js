console.log("test");

const firstVariable = 5.72;
let secondVariable = "Hello";
let thirdVariable = "World";
let stringConc = "Hello" + " " + "World";
let interpolate = "Hi!" + secondVariable + thirdVariable;
console.log("Birleştirilmiş Metin:", stringConc);

let forthVariable = "Hi ${secondVariable}";

console.log("String ve Number: ", "5" + 5);
const kdvOrani = 20;

const _interpolation =
  "Selam bugünün kuru:" +
  " " +
  firstVariable +
  "." +
  " Yapacağınız bütün işlemlerde fatura almayı unutmayınız. " +
  "Faturalarda KDV oranı " +
  kdvOrani +
  "." +
  " Bol kazançlar dileriz";
const interpolation = `Selam bugünün kuru: ${firstVariable}. Yapacağınız bütün işlemlerde fatura almayı unutmayınız. Faturalarda KDV oranı ${kdvOrani}. Bol kazançlar dileriz! `; // ALTGR + Virgül (Daha sonrasında birkez boşluk tuşuna basınız)
console.log("_Interpolation:", _interpolation);
console.log("Interpolation: ", interpolation);
const stringDefination2 = "Başka bir tanımlama yöntemi";

let stringeCevir = String(kdvOrani); // alternatif: kdvOrani.toString()
console.log("kdvOrani değişkeni string'e çevrildi: ", typeof stringeCevir);
console.log(typeof kdvOrani);

console.log(firstVariable);
console.log(secondVariable);

secondVariable = "Hi";

//firstVariable = 25

/*
console.log(1)
console.log(2)
*/

console.log("buradan devam edecektir");

let toplam = 23.45 + 10 + firstVariable + 40.325;
console.log("Toplam:", toplam);

// ### ARITHMETIC OPERATORS

let baslangic = 5;
let cikartma = 30.25 - 10 - 22.33 + 25;
let bolme = 20 / 2 / 5 + (2 - 5);
let carpma = (20 * 3.4) / 5;
let modKalan = 20 % 6;
baslangic++; // baslangic = baslangic + 1;
baslangic--; // baslangic = baslangic - 1;
console.log("Arttırma ve Azaltma Operatörü: ", baslangic);

// END: ARITHMETIC OPERATORS

let maxDeger = Math.max(1550, 25, 33, 45, 90, 123);

let x;
console.log(x); // undefined

x = 15;

console.log("En büyük değer:", maxDeger);
console.log(modKalan);

// ### ASSIGMENT OPERATORS ( =  |||||    +=  |||||   -=     |||||   /=     |||||  %= )

let sayi1 = 10;
sayi1 += 5; // sayi1 = sayi1 + 5;
sayi1 -= 3; // sayi1 = sayi1 - 3;
sayi1 /= 6; // sayi1 = sayi1 / 6;
console.log("ASSIGMENT OPS: ", sayi1);

// END: ASSIGMENT OPERATORS

// ### Number Methods

//let _sayi2 = "20.54";
//console.log(typeof _sayi2)

let sayi2 = "-20.45";
console.log(typeof sayi2);

sayi2 = Number(sayi2);
console.log(typeof sayi2);
console.log(sayi2);

let sayi3 = sayi2.toFixed(1);
console.log(sayi3);

// Boolean Type
let firstBoolean = true;
let secondBoolean = false;
console.log(typeof firstBoolean);
console.log(typeof secondBoolean);

secondBoolean = !secondBoolean; // ! ifadesi bir logical operator olarak geçer
console.log("SecondBoolean değeri: ", secondBoolean);

// ### Comparison Operators

let sayi4 = 14;
let sayi5 = 10;

let isBigger = sayi4 > sayi5;
console.log(isBigger);

let isLower = sayi4 < sayi5;
console.log(isLower);

let isEqual = sayi4 == "14";
let isEqual2 = sayi4 === "14";

console.log("isEqual:", isEqual);
console.log(isEqual2);

let isNotEqual = sayi5 != "10";
let isNotEqual2 = sayi5 !== "10";

console.log("isNotEqual: ", isNotEqual);
console.log("isNotEqual2:", isNotEqual2);

let stringControl = "C" < "B"; // string'lerde alfabetik sıraya göre kıyaslama yapılır.
console.log(stringControl);

// ### Logical Operators

let sayi6 = 120;
let sayi7 = 235;

let controlPoint = sayi6 < sayi7 && (sayi6 != 125 || sayi6 == 5);
console.log("Kontrol Noktası: ", controlPoint);

let controlPoint2 = sayi6 > sayi7 || 3 == 4;
console.log("Kontrol Noktası 2: ", controlPoint2);

let lastControl = (controlPoint || controlPoint2) && sayi6 > 100;
console.log(lastControl);
