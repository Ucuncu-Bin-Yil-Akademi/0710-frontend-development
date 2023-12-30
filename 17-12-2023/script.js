const anotherFunction = () => {
  console.log("Bu fonksiyon hemen çalışacaktır");
};

anotherFunction();

(function () {
  console.log("Bu fonksiyon hemen çalışacaktır.");
})();

let x;
let y;
let z;
let w;
let q;

// Regular Declaration
function myFunction(parameter) {
  console.log("Fonksiyon çalıştı");
  x = parameter;
}

// Arrow Declaration
const myAnotherFunc = (param1, param2) => {
  console.log("Arrow fonksiyonu çalıştı");
  y = param1;
  z = param2;
};

// Expression Declaration
const myFunction2 = function (param1, param2 = "Hello") {
  console.log("Expression fonksiyonu çalıştı");
  w = param1;
  q = param2;
};

console.log("x, y, z, w, q: ", x, y, z, w, q);

const myFunction3 = function (...param) {
  console.log(param); // Array olarak döner. Array'ler ilerleyen derslerde anlatılacaktır
};

const myFunction4 = function (param1, param2 = "parametre2", ...otherParams) {
  console.log(param1);
  console.log(param2);
  console.log(otherParams);
};

myFunction(13);
myAnotherFunc(20, 30);
myFunction2(40);
myFunction3(1, 2, 3, 4, 5, 6, 7, 8);
myFunction4(
  1,
  undefined,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  "hello",
  true,
  "hi",
  13,
  14
);

// Nested Function
const myNestFunction = (number1, number2) => {
  function toplama() {
    console.log("Toplama sonucu:", number1 + number2);
  }

  toplama();
};

myNestFunction(2, 5);

// Return - Example(1)

function returnMyName() {
  return "Canberk";
}

const myName = returnMyName();
console.log("myName: ", myName);

// Return - Example (2)

let bolmeSonucu;

const bolmeIslemi = (sayi1, sayi2) => {
  return sayi1 / sayi2;
};

bolmeSonucu = bolmeIslemi(20, 5);
bolmeSonucu = bolmeIslemi(20, 4);
console.log("bolmeSonucu değişkeni", bolmeSonucu);

// Return - Example(3)

function currencyCalculator(turkishLira) {
  console.log("Burası çalışacaktır");
  return turkishLira / 30;
  console.log("Burası çalışmayacaktır");
}

const dollarType = currencyCalculator(60);
console.log(dollarType);

// Recursive(Loop) Function

let startPoint = 0;
function loop(breakPoint) {
  startPoint++; // startPoint = startPoint + 1;
  if (startPoint > breakPoint) {
    return;
  }

  console.log("Recursive çalıştı:", startPoint);
  loop(10);
}

loop(10);

// Callback Function: Bir fonksiyona parametre olarak başka bir fonksiyonun gönderilmesidir
const callBackExample = (num1, num2, callback) => {
  let sonuc = num1 + num2;
  callback(sonuc);
};

function callBackFunc(sonucDegeri) {
  console.log("Toplama sonucu:", sonucDegeri);
}

callBackExample(10, 20, callBackFunc);

export function exportMyFunction() {
  console.log("Bu fonksiyonu başka dosyada çağıracağım");
}
console.log("script.js derlendi!");

export default function exportAnotherFunc() {
  console.log("Bu da başka bir gösterim");
}
