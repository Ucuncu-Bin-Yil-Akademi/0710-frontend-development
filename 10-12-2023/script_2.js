// ### CONDITIONAL STATEMENTS

// ### IF - ELSE IF - ELSE

/* 

if(şart){
    şart sağlanırsa burası çalışır
}
else{
    şart sağlanmazsa burası çalışır
} 

*/

let condition = 25 > 5;

if (condition && 10 > 3) {
  console.log("Şart doğrudur");
} else {
  console.log("Şart yanlıştır");
}

if (5 > 2 || 3 < 1) {
  console.log("Doğru");
} else {
  console.log("Yanlış");
}

if (5 === "5") {
  console.log("Evet - 1");
} else if (5 == "6") {
  console.log("Evet - 2");
} else if (5 === 5) {
  console.log("Evet - 3");
} else {
  console.log("Hayır");
}

/* 

Eğer bloklar tek satırdan oluşuyor Clean Code yaklaşımına göre süslü parantez
kaldırılacak, blok doğrudan koşulun yanına yazılabilir:

if (5 === "5") console.log("Evet - 1");
else if (5 == "6") {
  console.log("Evet - 2");
  console.log("Bitti!");
} else if (5 === 5) console.log("Evet - 3");
else console.log("Hayır"); 

*/

/* 
if ("a" == "b") console.log("Yazılar aynı");
else console.log("Yazılar farklı"); 
*/

// Terny Operator
"a" == "b" ? console.log("Yazılar aynı") : console.log("Yazılar farklı");

/* 
if (5 > 2) {
  console.log("Çalıştı!");
} 
*/

(5 > 2 || 0 > 1) && console.log("Çalıştı!");

//////////////////
// ### Switch-Case
//////////////////

const todaysDate = new Date().getDay();
//const todaysDate = 7;    bu kod switch-case'de default bloğunu çalıştırır
let dayOfWeek;

/* 

// Spagetti Code
if (todaysDate == 0) {
  dayOfWeek = "Pazar";
} else if (todaysDate == 1) {
  dayOfWeek = "Pazartesi";
} else if (todaysDate == 2) {
  dayOfWeek = "Salı";
} else if (todaysDate == 3) {
  dayOfWeek = "Çarşamba";
} else if (todaysDate == 4) {
  dayOfWeek = "Perşembe";
} else if (todaysDate == 5) {
  dayOfWeek = "Cuma";
} else if (todaysDate == 6) {
  dayOfWeek = "Cumartesi";
}

console.log("Bugün günlerden:", dayOfWeek); 

*/

switch (todaysDate) {
  case 0:
    dayOfWeek = "Pazar";
    break;
  case 1:
    dayOfWeek = "Pazartesi";
    break;
  case 2:
    dayOfWeek = "Salı";
    break;
  case 3:
    dayOfWeek = "Çarşamba";
    break;
  case 4:
    dayOfWeek = "Perşembe";
    break;
  case 5:
    dayOfWeek = "Cuma";
    break;
  case 6:
    dayOfWeek = "Cumartesi";
    break;
  default:
    dayOfWeek = "Gün değeri alınamadı";
    break;
}

console.log("Bugün günlerden:", dayOfWeek);
