console.clear(); // script.js dosyasındaki çıktıları görmek için bu satırı siliniz.
console.log("### OBJECT ###");

const student1 = {
  firstName: "Mehmet", // bu satıra field adı verilir. firstName key 'Mehmet' ise value olarak adlandırılır
  lastName: "Yılmaz",
  no: 120,
  isGraduate: false,
};

console.log(student1);

const student2 = {
  firstName: "John",
  lastName: "Doe",
  no: 58,
  isGraduate: true,
};

console.log(student2);

const firstNameStudent2 = student2.firstName;
console.log(firstNameStudent2);
console.log(student2.lastName);

const carsArray = [
  {
    model: "Mercedes",
    year: 2019,
  },
  {
    model: "Renault",
    year: 2022,
  },
  {
    model: "Peugeot",
    year: 2011,
  },
];

console.log(carsArray);

carsArray.map((car) => {
  console.log(car.model);
});
