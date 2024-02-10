//////////////////////////////////////////////////////////////////////////////////////////////////
// SENKRON BİR FONKSİYON TANIMLAMASI (BURADA TIMEOUT METODU BEKLENMEYECEKTIR) - ÖRNEK 1
//////////////////////////////////////////////////////////////////////////////////////////////////

/* console.log("İşlem başlatıldı...");

const senkronFonksiyon = () => {
  setTimeout(function () {
    console.log("Bilgiler getiriliyor...");
  }, 3000);
};

senkronFonksiyon();

console.log("İşlem tamamlandı!"); */

//////////////////////////////////////////////////////////////////////////////////////////////////
// SENKRON BİR FONKSİYON TANIMLAMASI (BURADA firstName DEĞİŞKENİ UNDEFINED GELECEKTIR) - ÖRNEK   2
//////////////////////////////////////////////////////////////////////////////////////////////////

/* let firstName;

function anotherFunc() {
  return `Fonksiyon çalıştı. Kullanıcının ismi: ${firstName}`;
}

setTimeout(() => {
  firstName = "Canberk";
  console.log(anotherFunc());
}, 3000);

console.log(anotherFunc());
console.log("bitti!"); */

// CONCURRENCY - ASENKRON YAPILAR
// BİR FONKSİYONU ASENKRON HALE GETİRMEK İÇİN ÜÇ FARKLI YAPI KULLANILIR:
// CALLBACK - PROMISE - ASYNC/AWAIT

// ### CALLBACK ### //

// enSonCalisacakFonksiyon --> callback fonksiyonu olarak adlandırılır

/* function asenkronIslem(enSonCalisacakFonksiyon) {
  console.log("İşlem başlıyor...");

  setTimeout(function () {
    console.log("Servis isteği yanıtlandı. İçerikler getirildi.");
    enSonCalisacakFonksiyon();
  }, 5000);
}

asenkronIslem(function () {
  // burası enSonCalisacakFonksiyon callback fonksiyonudur
  console.log("Getirilen içerikler kullanılarak DOM manipüle edildi.");
}); */

// ### PROMISE ### /

// basarili --> resolve
// basarisiz --> reject

/* const asenkronIslem = new Promise((basarili, basarisiz) => {
  console.log("İşlem başlatıldı...");

  setTimeout(function () {
    const islemBasarili = false;

    if (islemBasarili) {
      basarili("işlem başarıyla tamamlandı");
    } else {
      basarisiz("Bir hata oluştu");
    }
  }, 3000);
});

asenkronIslem
  .then((sonuc) => {
    console.log(sonuc);
  })
  .catch((hata) => {
    console.log(hata);
  });
 */

const users = [
  {
    id: 1,
    username: "canberk1",
    fullName: "Canberk Beren",
  },
  {
    id: 2,
    username: "john_doe",
    fullName: "John Doe",
  },
];

const asenkronIslem = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (users.length > 0) {
      resolve({
        message: "Kullanıcılar getirildi!",
        allUsers: users,
      });
    } else {
      reject({
        message: "Kullanıcı bulunamadı",
        allUsers: [],
      });
    }
  }, 3000);
});

const userListEl = document.getElementById("userList");

asenkronIslem
  .then((response) => {
    console.log("Then bloğu: ", response.message, response.allUsers);
    users.forEach((item) => {
      const newLiEl = document.createElement("li");
      newLiEl.innerText = item.fullName;
      userListEl.appendChild(newLiEl);
    });
  })
  .catch((error) => {
    console.log("Catch bloğu: ", error.message, error.allUsers);
    userListEl.innerText = "Kullanıcı bulunamadı";
  });
