// setTimeOut metodu: Bir fonksiyonun çalışmasını belirli bir zaman kadar ötelemek için kullanılır

function sayHello() {
  console.log("Hello world!");
}

// sayHello(); doğrudan çağrılırsa fonksiyon hemen çalışacaktır

setTimeout(sayHello, 5000); // ilk parametre çalışacak fonksiyon, ikinci parametre ise ne kadar süre sonra çalışacağıdır.
//Bu süre milisaniye olmalıdır. (1 saniye = 1000 milisaniye)

setTimeout(function () {
  console.log("Merhaba dünya!");
}, 7500);

// setInterval metodu: Bir fonkisyonu belirli periyodlarda sürekli çalıştırmayı sağlar. Örneğin fonksiyonumuzun her 5 saniyede bir çalışması gibi

setInterval(function () {
  console.log("Her 6 saniyede bir çalıştım");
}, 6000);

let i = 0;

const degeriGuncelle = () => {
  i++;
  console.log("i değeri güncellendi: ", i);
  if (i > 4) {
    clearInterval(surekliCalis); // interval'ın çalışmasını sonlandırır
  }
};

const surekliCalis = setInterval(degeriGuncelle, 3000);

// DOM elemanları arasında geçiş (parent/child/sibling)

const alinacakUrunEl = document.getElementById("alinacak-urun");
console.log(alinacakUrunEl);

console.log(alinacakUrunEl.parentNode); // bu yaklaşımla seçilmiş elemanın parent'ı elde edilebilir
console.log(alinacakUrunEl.childNodes); // bu yaklaşımla seçilmiş elemanın child elemanları elde edilebilir
console.log(alinacakUrunEl.nextElementSibling);
console.log(alinacakUrunEl.previousElementSibling);

const alisverisListesiEl = document.getElementById("alisveris-listesi");
console.log(alisverisListesiEl.childNodes); // nodeList olarak döner
console.log(alisverisListesiEl.children[2]); // HTMLCollection olarak döner, array metodları kullanılamaz ancak sadece index ile erişim sağlanabilir

console.log(alisverisListesiEl.firstElementChild);
console.log(alisverisListesiEl.lastElementChild);

const linkEl = alinacakUrunEl.childNodes[1];
console.log(linkEl.getAttribute("href")); // seçilmiş olan elemanın "href" attribute'unun değerini getirir
console.log(linkEl.classList);
console.log("bg-red-500 mevcut mu? ", linkEl.classList.contains("bg-red-500"));
console.log("Elemanın class'larının string hali: ", linkEl.className);
linkEl.className = linkEl.className + " yeni-class";
console.log("Elemanın style property'si: ", linkEl.style);
linkEl.style.backgroundColor = "green";

linkEl.classList.forEach((elementClass) => {
  console.log(elementClass);
});

setTimeout(function () {
  linkEl.setAttribute("href", "https://yumurta-linki.com"); // sayfa yüklendikten 5 saniye sonra yumurta linki güncellenir.
}, 5000);

setTimeout(function () {
  linkEl.removeAttribute("href"); // belirtilen attribute'u kaldırmayı sağlar. sayfa yüklendikten 10 saniye sonra link kalkacaktır
  linkEl.innerHTML = "<h1>Yumurta</h1>";
  linkEl.classList.add("border"); // add metodu sayesinde elemanın class'larına ekleme yapılabilir
  linkEl.classList.remove("rounded"); // elemanın class'ları arasından rounded'ı siler
  linkEl.classList.replace("bg-red-600", "bg-red-500"); // ilk parametre güncellenecek class değeri, ikinci parametre yeni değer olacaktır. Yani bg-red-600 class'ını bg-red-500 ile değiştirir
  console.log(
    "bg-red-500 mevcut mu? ",
    linkEl.classList.contains("bg-red-500")
  );
}, 10000);
debugger;

let newListEl = document.createElement("li"); // boş bir <li></li> etiketi oluşturur ancak bunu henüz bir yere eklememiştir. Sadece bilgisayarımızın RAM'inde bulunur

let newLinkEl = document.createElement("a"); // <a></a>
newLinkEl.setAttribute("href", "https://yumusatici.com"); // <a href="yumusatici.com"></a>
newLinkEl.innerText = "Yumuşatıcı"; // <a href="yumusatici.com">Yumuşatıcı</a>

newListEl.appendChild(newLinkEl); // Elemanın içerisine - child'ına başka bir elemanı en sona ekler. Sonuç:  <li><a href="yumusatici.com">Yumuşatıcı</a></li>

// alinacakUrunEl.after(newListEl);  bu metod ile alinacakUrunEl elemanından sonraki gelecek sibling elemanı newListEl olacaktır

alisverisListesiEl.insertBefore(newListEl, alinacakUrunEl); // alisverListesiEl parent elemanın içindeki child elemanlarından alinacakUrunEl elemanının öncesinde gelen elemanı newListEl olarak günceller
//alisverisListesiEl.appendChild(newListEl);
