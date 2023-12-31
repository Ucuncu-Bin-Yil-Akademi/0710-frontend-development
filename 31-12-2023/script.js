// ### Array Methods (2/2) ### //

// indexOf (Array'deki bir elemanımızın hangi index sırasında bulunduğunu söyler)

const arr = ["elma", "çilek", "armut", "muz"]; // string arrays
let armutIndex = arr.indexOf("armut");
console.log(arr);
console.log("Armut elemanının index değeri: ", armutIndex);

arr[armutIndex] = "Üzüm";
console.log("Array değişti: ", arr); // ["elma", "çilek", "Üzüm", "muz"]

const kayisiIndex = arr.indexOf("Kayısı"); // array'de olmayan bir eleman ise bu method -1 sonucunu dönecektir.

console.log(arr[-1]); // Index numaraları Javascript'te negatif olamaz

// includes (Array'de bir elemanın olup olmadığını kontrol eder => boolean)

const armutExists = arr.includes("armut");
console.log("Bu arrayde armut elemanı var mı?: ", armutExists);

const muzExists = arr.includes("muz");
console.log("Bu arrayde muz elemanı var mı?: ", muzExists);

// reverse (Arrayi tersine çevirir)
console.log("Normal Array: ", arr); // ["elma", "çilek", "Üzüm", "muz"]

const reversedArr = arr.reverse();
console.log("Reverse edilmiş Array: ", reversedArr); // ['muz', 'Üzüm', 'çilek', 'elma']

// join (Arrayi birleştirip bir string haline getirir)

const stringedArr = arr.join();
console.log("Array stringe çevrildi: ", stringedArr, typeof stringedArr);

const _stringedArr = arr.join(" * ");
console.log("Elemanlar * ile ayrılmış olacak: ", _stringedArr);

// split (Bir Stringi Arraye çevirir)

const str = "Bugün hava güneşli";
const arrStr = str.split(" ");
console.log("String Arraye çevrildi: ", arrStr);

const _arrStr = _stringedArr.split(" * ");
console.log("String tekrar Arraye çevrildi: ", _arrStr);

// concat (İki array'i birleştirmek için kullanılır)
const arr1 = [5, 10, 15, 20, 25, 30];
const arr2 = [35, 40, 45, 50, 55, 60, 65, 70, 75];

const mergedArray = arr1.concat([40, 45, 50]);
console.log("Örnek 1: ", mergedArray);

const _mergedArray = arr1.concat(arr2);
console.log("Örnek 2: ", _mergedArray);

// reduce (Arraydeki elemanlardan tek bir değer üretir)

const nums = [5, 23, 32, 45, 46, 90];

/* 

let sum = 0;

nums.map((current) => {
  sum = sum + current;
});

console.log("Toplam: ", sum);

 */

let sum = nums.reduce(function (acc, current) {
  return acc + current; // acc = acc + current gibi düşünülebilir. return, her iterasyonda acc'nin yeni değerini belirler.
}, 0); // acc'nin başlangıç değeri sıfırdır (const acc = 0; gibi düşünülebilir)

console.log("Toplam: ", sum);
console.log("Ortalama: ", sum / nums.length);

// sort (Arraydeki elemanları sıralamamızı sağlar)

const newArr = ["elma", "armut", "kivi", "muz"];
newArr.sort(); // Herhangi bir parametre girilmez ise string arraylerde alfabetik sıralama yapar

console.log(newArr);

const _newArr = [3, 11, 23, 6, 44, 22];

_newArr.sort(function (a, b) {
  debugger;
  // a ve b olarak tanımlanan parametreler array'deki iterasyona sokulan ikişerli elemanlardır
  return a - b; // eğer bu hesaplama negatif çıkarsa yerleri değiştirilmez, pozitif çıkarsa değiştirilir
  // örneğin ilk iterasyonda a=3 ve b=11 olacaktır ve  3-11 değeri negatif (-8) döneceği için yerleri değişmeyecektir
});

console.log("Küçükten Büyüğe Sırala: ", _newArr);

_newArr.sort(function (a, b) {
  return b - a;
});

console.log("Büyükten Küçüğe Sırala: ", _newArr);
