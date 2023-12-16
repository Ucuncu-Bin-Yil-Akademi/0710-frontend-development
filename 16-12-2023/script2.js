function consolaYazdir() {
  console.log("Fonksiyon çalıştı ve console'a yazıldı!");
}

const consolaYazdir2 = () => {
  console.log("Arrow function çalıştı");
};

function consolaYazdir3(parameter1, parameter2) {
  console.log("Hava durumu: ", parameter1);
  console.log("Hava sıcaklığı: ", parameter2);
}

consolaYazdir();
consolaYazdir2();

consolaYazdir3("Rainy", 11);

function toplamaIslemi(sayi1, sayi2) {
  const toplam = sayi1 + sayi2;
  console.log("Sayıların Toplamı:", toplam);
}

toplamaIslemi(320, 155);

function bolmeIslemi(sayi1, sayi2) {
  const bolme = sayi1 / sayi2;
  console.log("Bölme sonucu:", bolme);
}

bolmeIslemi(100, 50);
