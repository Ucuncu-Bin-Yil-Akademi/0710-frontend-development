// LOOPS

// ### FOR LOOP ###

for (let i = 0; i < 10; i++) {
  console.log("Döngü Çalıştı: ", i);
}

for (let i = 0; true; i++) {
  console.log("Sonsuz Döngü: ", i);

  if (i === 3) {
    break;
  }
}

for (let i = 0; i < 10; i++) {
  console.log("Yeni Döngü:", i);
  if (i === 3) {
    continue; // mevcut iterasyonu bırakır ve bir sonraki adıma atlar. Yani i -> 4
  }
  console.log("Döngü sonlandı");
}

// console.log(i);      --> for gibi metodlar içerisinde veya fonksiyonlar içerisinde tanımlı olan değişkenlere sadece tanımlı oldukları alanın
// içerisinden ulaşabiliriz (Scope)

// ### WHILE LOOP ###

let i = 11;

while (i < 10) {
  if (i === 3) {
    break;
  }

  console.log("While Döngüsü:", i);
  i++;
}

// ### DO-WHILE LOOP ###
let j = 11;

do {
  console.log("Do-While Çalıştı", j);
  j++;
} while (j < 10);
