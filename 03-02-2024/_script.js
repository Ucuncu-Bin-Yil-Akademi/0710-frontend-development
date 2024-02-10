// ### TRY-CATCH BLOĞU ###

let users = [];

try {
  // Bu blok içerisinde yazılan kodlarda hata oluşursa catch bloğu çalışır.
  let x = 10;
  x = 20;
} catch (error) {
  // Hata oluştuğunda çalışacak kodlar buraya yazılır.
  console.log("Hata oluştu");
  console.log(error); // Hata mesajını yazdırır.
} finally {
  // Hata olsun olmasın çalışacak kodlar buraya yazılır.
  console.log("Finally bloğu çalıştı");
}

// ### FETCH - API ### (1)

fetch("https://65bdedffdcfcce42a6f19a02.mockapi.io/get-users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
    alert("Kullanıcılar getirilirken bir hata oluştu!");
  });

// ### FETCH - API ### (2)

async function getUsers() {
  try {
    const response = await fetch(
      "https://65bdedffdcfcce42a6f19a02.mockapi.io/get-users"
    );

    users = await response.json();
    console.log(users);
  } catch (error) {
    alert("Kullanıcılar getirilirken bir hata oluştu!");
  }
}

getUsers();

// ### AXIOS (1) ###

async function getUsersAxios() {
  try {
    const response = await axios.get(
      "https://65bdedffdcfcce42a6f19a02.mockapi.io/get-users"
    );
    users = response.data;
  } catch (err) {
    console.log(err);
  }
}

getUsersAxios();

// ### AXIOS (2) ###

axios
  .get("https://65bdedffdcfcce42a6f19a02.mockapi.io/get-users")
  .then((response) => {
    console.log("AXIOS: ", response.data);
  })
  .catch((error) => {
    console.log(error);
  });
