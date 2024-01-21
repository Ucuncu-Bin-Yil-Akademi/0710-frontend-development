const myButtonEl = document.getElementById("myButton");

// click --> tıklama olayı
myButtonEl.addEventListener(
  "click",
  function (tiklamaIslemiHakkindakiDetaylar) {
    console.log(tiklamaIslemiHakkindakiDetaylar);
    console.log("Butona tıklandı");
  }
);

function basligaTikla() {
  alert("Başlığa tıklandı");
}

document.getElementById("headElement").addEventListener("click", basligaTikla);

const imageEl = document.getElementById("myPhoto");
// mouseover --> elemanın üzerine gelme olayı
imageEl.addEventListener("mouseover", function (e) {
  console.log(e);
  alert("Görselin üzerine geldin.");
});

// mouseout --> mouse ile elemanın üzerinden ayrılma olayı
imageEl.addEventListener("mouseout", function () {
  alert("Görselden ayrıldın.");
});

// dblclick --> mouse ile elemana çift tıklama olayı
imageEl.addEventListener("dblclick", function () {
  alert("Görsele çift tıkladın");
});

const inputEl = document.getElementsByName("age")[0];

// input elemanına tıklandığı zaman tetiklenen olay (klavyeden veri girilmeye hazır olduğu durum)
inputEl.addEventListener("focus", function () {
  console.log("Yaş input alanına odaklanıldı");
});

// input alanından çıkıldığı zaman tetiklenen olay
inputEl.addEventListener("blur", function () {
  console.log("Yaş input alanından çıkıldı");
});

// klavyede bir tuş aşağıya doğru ittirildiği anda gerçekleşen olay
inputEl.addEventListener("keydown", function (event) {
  console.log(event);
  console.log(`Klavyede ${event.key} tuşu ittirildi`);
});

// klavyede basılmış olan tuştan parmağınız çekildiği anda bu olay tetiklenir
inputEl.addEventListener("keyup", function () {
  console.log("Tuştan eliniz çekildi ve tuş yukarı doğru itildi");
});

// input'un içerisindeki değer değiştiği zaman tetiklenir
inputEl.addEventListener("input", function () {
  console.log("Girilen değer değişti");
});

// input text/password/email/number gibi alanlardaki güncel değeri elde etmek için bir yaklaşım
// change event'i focus'lanan yani odaklanan elemandan ayrılındığı zaman (blur) tetiklenen bir olaydır
inputEl.addEventListener("change", function (e) {
  console.log("Yaş alanında değişiklik oldu", e.target.value);
});

const checkboxEl = document.getElementsByName("kvkk")[0];
checkboxEl.addEventListener("change", function (event) {
  console.log(
    "Checkbox değeri değişti. Kutuya tik atılmış mı?",
    event.target.checked
  );
});

const radioEl = document.getElementsByName("cinsiyet");
console.log(radioEl);

let selectedGender = "";

function handleGenderChange(event) {
  if (event.target.checked) {
    selectedGender = event.target.value;
  }
  console.log(selectedGender);
}

/* radioEl[0].addEventListener("change", function (e) {
  handleGenderChange(e);
});

radioEl[1].addEventListener("change", function (e) {
  handleGenderChange(e);
}); */

radioEl.forEach((element) => {
  element.addEventListener("change", function (e) {
    handleGenderChange(e);
  });
});
