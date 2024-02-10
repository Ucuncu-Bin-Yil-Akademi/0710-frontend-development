let users = [];
let selectedUser = {
  id: null,
  username: "",
};

async function getAllUsers() {
  try {
    const response = await axios.get(
      "https://65bdedffdcfcce42a6f19a02.mockapi.io/get-users"
    );

    users = response.data;
    // [1,2,3,4,5,6,a,b,c,7,8]
    // reverse: [8,7,c,b,a,6,5,4,3,2,1]
    users = users.reverse();
    renderUsers();
  } catch (err) {
    Swal.fire({
      title: "Hata",
      text: "Kullanıcılar getirilirken hata oluştu",
      icon: "error",
      confirmButtonText: "Tamam",
    });
  }
}

getAllUsers();

function renderUsers() {
  const userListEl = document.getElementById("userListWrapper");
  const userCountEl = document.getElementById("userCount");
  userCountEl.innerText = `Kullanıcı Listesi (${users?.length || 0})`;

  users?.forEach((user) => {
    const cardEl = document.createElement("div");
    cardEl.className =
      "flex flex-col items-center gap-5 border border-2 border-gray-300 p-3 rounded bg-gray-100 user-card";
    cardEl.setAttribute("data-user-id", user.id);

    const cardHeaderEl = document.createElement("div");
    cardHeaderEl.className = "flex gap-3 w-full";

    const avatarEl = document.createElement("img");
    avatarEl.src = user.avatar;
    avatarEl.className = "h-[75px] w-[75px] rounded-full";
    cardHeaderEl.appendChild(avatarEl);

    const userInfoEl = document.createElement("div");
    userInfoEl.className = "flex flex-col";

    const userNameSpanEl = document.createElement("span");
    userNameSpanEl.className = "text-gray-500";
    userInfoEl.innerText = `@${user.username}`;

    const fullNameSpanEl = document.createElement("span");
    fullNameSpanEl.className = "text-gray-600";
    fullNameSpanEl.innerText = `${user.firstname} ${user.lastname}`;

    const birthDateSpanEl = document.createElement("span");
    birthDateSpanEl.className = "text-gray-500";
    birthDateSpanEl.innerText = moment(user.birtday).format("DD/MM/YYYY");

    userInfoEl.appendChild(userNameSpanEl);
    userInfoEl.appendChild(fullNameSpanEl);
    userInfoEl.appendChild(birthDateSpanEl);

    cardHeaderEl.appendChild(userInfoEl);

    const cardFooterEl = document.createElement("div");
    cardFooterEl.className = "w-full flex justify-between";

    const selectUserBtn = document.createElement("button");
    selectUserBtn.className =
      "bg-orange-500 text-white px-2 py-1 rounded text-sm";
    selectUserBtn.innerText = "Kullanıcıyı Seç";
    selectUserBtn.addEventListener("click", () => {
      selectedUser.id = user.id;
      selectedUser.username = user.username;
      renderSelectedUser();
    });

    const updateUserBtn = document.createElement("button");
    updateUserBtn.className =
      "bg-gray-500 text-white px-2 py-1 rounded text-sm";
    updateUserBtn.innerText = "Kullanıcıyı Güncelle";
    updateUserBtn.addEventListener("click", () => {
      const modalEl = document.getElementById("userModal");
      modalEl.classList.remove("hidden");

      selectedUser = {
        id: user.id,
        username: user.username,
      };

      const actionBtnEl = document.getElementById("modalActionBtn");
      actionBtnEl.innerText = "Kullanıcıyı Güncelle";
      actionBtnEl.setAttribute("data-button-type", "update");
      document.getElementById("modalTitle").innerText = "Kullanıcı Güncelle";

      const nameAttrs = [
        "firstname",
        "lastname",
        "username",
        "birthday",
        "avatar",
      ];
      nameAttrs.forEach((attribute) => {
        const el = document.getElementsByName(attribute)[0];
        el.value = user[attribute];
      });
    });

    cardFooterEl.appendChild(selectUserBtn);
    cardFooterEl.appendChild(updateUserBtn);

    cardEl.appendChild(cardHeaderEl);
    cardEl.appendChild(cardFooterEl);

    userListEl.appendChild(cardEl);
  });
}

function renderSelectedUser() {
  const userCards = Array.from(document.querySelectorAll(".user-card"));

  const selectedUserEl = userCards.find((card) => {
    return card.attributes["data-user-id"].value == selectedUser.id;
  });

  if (selectedUserEl.classList.contains("border-orange-500")) {
    selectedUserEl.classList.remove("border-orange-500");
    selectedUser = {
      id: null,
      username: "",
    };
  } else {
    selectedUserEl.classList.add("border-orange-500");
  }

  userCards
    .filter((card) => {
      return card.attributes["data-user-id"].value != selectedUser.id;
    })
    .forEach((card) => {
      card.classList.remove("border-orange-500");
    });
}

async function handleCreateUser() {
  const reqBody = {
    firstname: document.getElementsByName("firstname")[0].value,
    lastname: document.getElementsByName("lastname")[0].value,
    username: document.getElementsByName("username")[0].value,
    birthday: document.getElementsByName("birthday")[0].value,
    avatar: document.getElementsByName("avatar")[0].value,
  };

  await axios
    .post("https://65bdedffdcfcce42a6f19a02.mockapi.io/get-users", reqBody)
    .then(() => {
      const modalEl = document.getElementById("userModal");
      modalEl.classList.add("hidden");

      Swal.fire({
        title: "Başarılı",
        text: "Kullanıcı başarıyla eklendi",
        icon: "success",
        confirmButtonText: "Tamam",
      });

      users = [];
      const userListEl = document.getElementById("userListWrapper");
      userListEl.innerHTML = "";
      getAllUsers();
    })
    .catch((err) => {
      Swal.fire({
        title: "Hata",
        text: "Kullanıcı eklenirken hata oluştu",
        icon: "error",
        confirmButtonText: "Tamam",
      });
    });
}

async function handleUpdateUser() {
  const reqBody = {
    firstname: document.getElementsByName("firstname")[0].value,
    lastname: document.getElementsByName("lastname")[0].value,
    username: document.getElementsByName("username")[0].value,
    birthday: document.getElementsByName("birthday")[0].value,
    avatar: document.getElementsByName("avatar")[0].value,
  };

  await axios
    .put(
      "https://65bdedffdcfcce42a6f19a02.mockapi.io/get-users/" +
        selectedUser.id,
      reqBody
    )
    .then(() => {
      const modalEl = document.getElementById("userModal");
      modalEl.classList.add("hidden");
      selectedUser = {
        id: null,
        username: "",
      };

      users = [];
      const userListEl = document.getElementById("userListWrapper");
      userListEl.innerHTML = "";
      getAllUsers();

      Swal.fire({
        title: "Başarılı",
        text: "Kullanıcı başarıyla güncellendi",
        icon: "success",
        confirmButtonText: "Tamam",
      });
    })
    .catch((err) => {
      Swal.fire({
        title: "Hata",
        text: "Kullanıcı güncellenirken hata oluştu",
        icon: "error",
        confirmButtonText: "Tamam",
      });
    });
}

// document.getElementById("deleteUserBtn").addEventListener("click", () => {});

$("#deleteUserBtn").click(() => {
  {
    if (!selectedUser.id) {
      Swal.fire({
        title: "Hata",
        text: "Lütfen bir kullanıcı seçiniz",
        icon: "error",
        confirmButtonText: "Tamam",
      });
    } else {
      Swal.fire({
        title: "Kullanıcıyı Sil",
        html: `<b>@${selectedUser.username}</b> kullanıcı adlı kullanıcıyı silmek istediğinize emin misiniz?`,
        icon: "error",
        confirmButtonText: "Evet",
        cancelButtonText: "Hayır",
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios
            .delete(
              `https://65bdedffdcfcce42a6f19a02.mockapi.io/get-users/${selectedUser.id}`
            )
            .then(() => {
              Swal.fire({
                title: "Başarılı",
                text: "Kullanıcı başarıyla silindi",
                icon: "success",
                confirmButtonText: "Tamam",
              });
              users = [];
              const userListEl = document.getElementById("userListWrapper");
              userListEl.innerHTML = "";
              getAllUsers();
            })
            .catch((err) => {
              Swal.fire({
                title: "Hata",
                text: "Kullanıcı silinirken hata oluştu",
                icon: "error",
                confirmButtonText: "Tamam",
              });
            });
        }
      });
    }
  }
});

document.getElementById("createUserModalBtn").addEventListener("click", () => {
  const modalEl = document.getElementById("userModal");
  modalEl.classList.remove("hidden");

  $("#modalActionBtn")
    .text("Kullanıcıyı Ekle")
    .attr("data-button-type", "create");

  /*   
  const actionBtnEl = document.getElementById("modalActionBtn");
  actionBtnEl.innerText = "Kullanıcıyı Ekle";
  actionBtnEl.setAttribute("data-button-type", "create"); 
  */

  document.getElementById("modalTitle").innerText = "Kullanıcı Ekle";
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  const modalEl = document.getElementById("userModal");
  modalEl.classList.add("hidden");
  document.getElementById("modalActionBtn").innerText = "";
  document.getElementById("modalTitle").innerText = "";
});

document
  .getElementById("modalActionBtn")
  .addEventListener("click", async () => {
    const nameAttrs = [
      "firstname",
      "lastname",
      "username",
      "birthday",
      "avatar",
    ];
    let isFormValid = true;

    nameAttrs.forEach((attribute) => {
      const el = document.getElementsByName(attribute)[0];
      if (el.value === "") {
        isFormValid = false;
        Swal.fire({
          title: "Hata",
          text: "Lütfen tüm alanları doldurunuz",
          icon: "error",
        });
      }
    });

    if (isFormValid) {
      const actionBtnEl = document.getElementById("modalActionBtn");
      if (actionBtnEl.getAttribute("data-button-type") === "create") {
        handleCreateUser();
      } else if (actionBtnEl.getAttribute("data-button-type") === "update") {
        handleUpdateUser();
      }
    }
  });
