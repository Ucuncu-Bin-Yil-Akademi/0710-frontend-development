// DOM - Document Object Model
console.log(document);

// document.getElementById() ## id'ye göre bir eleman getirir
const h1Elm = document.getElementById("baslik");
console.log(h1Elm);

const imageElm = document.getElementById("random-gorsel");
console.log(imageElm);

const wrapperElm = document.getElementById("selam-ver");
console.log(wrapperElm);

// document.getElementsByClassName() ## class'a göre elemanları getirir, bir Array içerisinde döner
// Elde edilen DOM elemanları bir Array'de dönüyor olsa dahi Array metodları bu elemanlar üzerinde kullanılamaz.
// Çünkü geriye dönen Array'in tipi bir HTMLCollection olup standart Javascript Array'i değildir.
const ubyElms = document.getElementsByClassName("uby");
console.log(ubyElms[0]);

// document.getElementsByName()  ## name'e göre elemanları getirir, bir Array içerisinde döner
// Elde edilen DOM elemanları bir Array'de dönüyor olsa dahi Array metodları bu elemanlar üzerinde kullanılamaz.
// Çünkü geriye dönen Array'in tipi bir HTMLCollection olup standart Javascript Array'i değildir.

const inputElms = document.getElementsByName("username");
console.log(inputElms);

const inputElms2 = document.getElementsByName("metin");
console.log(inputElms2);

// document.querySelector() ## id veya class'a ait ilk elemanı getirir
const baslikElm = document.querySelector("#baslik"); // id'si baslik olan ilk elemanı getirir
console.log(baslikElm);

// document.querySelectorAll() ## id veya class'a ait elemanları getirir, bir Array içerisinde döner
const baslikElements = document.querySelectorAll("#baslik");
console.log(baslikElements);

//////

baslikElements.forEach((item) => {
  console.log(item);
});

console.log(ubyElms[0]);

const degisecekElm = document.getElementById("degisecek-metin");
console.log(degisecekElm);

degisecekElm.innerText = "Yeni metin";

const selectedElements = document.getElementsByClassName("eleman");
// getElementsByClassName geriye bir HTMLCollection döner. Bu standart Array yapısından farklıdır.
// HTMLCollection içerisinde Array metodları uygulanamaz (foreach vb.)

const selectedElementsQ = document.querySelectorAll(".eleman");
// querySelectorAll metodu ise bir NodeList döner. Burada Array metodları kullanılabilir.

console.log(selectedElementsQ);

selectedElementsQ.forEach((item) => {
  console.log(item);
  item.innerHTML = "<i>Yeni Değer</i>";
});

selectedElements[0].innerText = "ilk eleman";
