const booleanType = true; // false
const stringType = 'hello world'
const numberType = -50.456

const arrayType = ['Ahmet', 'Ayşe', 'Mehmet']
const arrayType2 = [20, 24, 29]
const arrayType3 = [true, false, false]
const arrayType4 = ['Ahmet', 20, true, 'Ayşe', 24, false, 29, false]

const emptyArr = [];
console.log(emptyArr[0])

const firstEl = arrayType[0]
const secondEl = arrayType[1]
const thirdEl = arrayType[2]

console.log(arrayType4)

const firstElm = arrayType4[0]
const elCount = arrayType4.length
const lastEl = arrayType4[elCount - 1]

console.log('Array Eleman Sayısı: ', elCount)
console.log('İlk Eleman:', firstElm)
console.log('Sonuncu Eleman:', lastEl)

// ### ARRAY METHODS ### ///

const newArray = []
console.log('newArray', newArray)

// 1. Push (Array'in sonuna yeni bir eleman ekler)
newArray.push('çilek')
newArray.push('muz', 'elma', 'armut')
console.log('Array sonuna eleman eklendi: ', newArray)

// 2. Unshift (Array'in başına yeni bir eleman ekler)
newArray.unshift('üzüm')
console.log('Array başına eleman eklendi: ', newArray)


// 3. Pop (Array'in sonundaki elemanı kaldırır)
newArray.pop()
console.log(newArray)

// 4. Shift (Array'in ilk elemanını kaldırır)
newArray.shift();
console.log(newArray)

// 5. Slice (Array'in bir parçasını kopyalar ve yeni bir Array oluşturur)

 const cities = ['İstanbul', 'İzmir', 'Ankara', 'Bursa', 'Denizli', 'Rize', 'Sivas', 'Van']
 const newCities = cities.slice(1, 4)

 cities[0] = 'ISTANBUL' // Belirli bir index'teki elemanın değerini bu şekilde değiştirebiliriz
 console.log(newCities)
 console.log(cities)

 // 6. Splice (Array'de belirtilen index'ten sonra belirtilen eleman sayısı kadar elemanı kaldırır ve yerine yeni eleman ekler)

 const students = ['Ahmet', 'Mehmet', 'Ayşe', 'Hatice']
 students.splice(1, 2, 'Ali') // 1. index'ten başla 2 tane eleman sil ve bu silinen iki eleman yerine 'Ali' elemanını koy
 // students.splice(2, 1, 'Veli', 'Yusuf', 'Zeynep') // 2. index'ten başla ve 1 tane eleman sil. Yerine Veli, Yusuf ve Zeynep'i ekle
 // students.splice(1, 2) // Eğer yerine koyulacak elemanlar belirtilmezse ise sadece bu elemanları silecektir
 console.log(students)


 // 7. forEach (Array elemanları üzerinde tek tek gezinmemizi ve her elemanda bir fonksiyonu çalıştırmamıza olanak sağlar)

 const ages = [33, 45, 43, 22, 14, 12, 21, 13, 55, 76, 29, 5, 17]

 function ageDisplayer(age){
    console.log(age)
 }

 ages.forEach(function(currentAge, index){
    console.log('Güncel yaş ve index değeri:', currentAge, index)
 })

 ages.forEach((age) => {
    console.log(age)
 })

 ages.forEach(function(age){
    ageDisplayer(age)
 })

// 8. map (Array elemanlarında gezinip belirli bir işlem yapar ve yeni bir Array oluşturur)

let newAges = ages.map(function(x){
    if(x > 18){
        return x
    }
    else {
        return 'Reşit Değil'
    }
})

console.log(newAges)

// 9. filter (Belirli koşulu sağlayan elemanları içeren yeni bir Array oluşturur)

let filteredArray = ages.filter(function(currentAge){
    return currentAge > 18 // şart sağlanırsa currentAge'i Array'e ekle sağlanmazsa pas geç
})

console.log('Filtrelenmiş Array: ', filteredArray)

/* 

const exampleArrowFunction = () => {
    return 'Geriye bir değer dön'
}

const exampleArrowFunctionCleaner = () => 'Geriye bir değer dön' 

*/

let _filteredArray = ages.filter((currentAge) => currentAge > 18)
console.log('Filter Daha Temiz Yazılmış Oldu: ', _filteredArray)