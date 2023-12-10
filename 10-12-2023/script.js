// ### DATE (Built-in)

const stringVar = "10/12/2023 10:33";
const numberVar = 5;
const booleanVar = true;

const dateVar = new Date(); // Yeni bir tarih objesi oluşturmaya yarar. Güncel olan tarihi ve saati verir.
console.log(dateVar);

const yearInfo = dateVar.getFullYear(); // Tarihten yıl değerini getirir.
console.log("Yıl:", yearInfo);

const monthInfo = dateVar.getMonth(); // Tarihten ay değerini getirir.
console.log("Ay:", monthInfo);

const dayInfo = dateVar.getDay(); // Tarihten gün değerini getirir.
console.log("Gün:", dayInfo); // 0 = Pazar , 1 = Pazartesi , 2 = Salı, ...... , 6 = Cumartesi

const hourInfo = dateVar.getHours(); // Tarihten saat değerini getirir.
console.log("Saat:", hourInfo);

const minuteInfo = dateVar.getMinutes(); // Tarihten dakika değerini getirir.
console.log("Dakika:", minuteInfo);

const secondInfo = dateVar.getSeconds(); // Tarihten saniye değerini getirir.
console.log("Saniye:", secondInfo);

const millisecondInfo = dateVar.getMilliseconds(); // Tarihten milisaniye değerini getirir.
console.log("Milisaniye:", millisecondInfo);

const timeInfo = dateVar.getTime(); // Yıl başından itibaren, date değişkenimizin tarihine kadar geçen toplam milisaniye sayısı
console.log("Toplam Milisaniye:", timeInfo);

// ### DATE (momentjs)
const momentDate = moment(); // new Date(); alternatifi
const anotherMomentDate = moment().add(1, "seconds");

const formattedDate = momentDate.format("DD.MM.YYYY HH:mm:ss");
const momentDay = momentDate.get("date");
const momentMonth = momentDate.get("month");
const momentYear = momentDate.get("year");

const add10Days = momentDate
  .add(10, "days")
  .add(3, "years")
  .format("DD-MM-YYYY");

const differenceBtwDates = anotherMomentDate.diff(momentDate, "seconds");

console.log("Formatlanmış Tarih:", formattedDate);
console.log("Gün(Moment):", momentDay);
console.log("Ay(Moment):", momentMonth);
console.log("Yıl(Moment):", momentYear);

console.log("10 gün sonra:", add10Days);
console.log("İki tarih arası gün farkı:", differenceBtwDates);
