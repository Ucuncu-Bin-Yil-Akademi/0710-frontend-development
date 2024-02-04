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

    cardFooterEl.appendChild(selectUserBtn);
    cardFooterEl.appendChild(updateUserBtn);

    cardEl.appendChild(cardHeaderEl);
    cardEl.appendChild(cardFooterEl);

    userListEl.appendChild(cardEl);
  });
}

function renderSelectedUser() {
  const userCards = Array.from(document.querySelectorAll(".user-card"));

  const selectedUserEl = userCards.filter((card) => {
    return card.attributes["data-user-id"].value == selectedUser.id;
  });

  selectedUserEl[0].classList.add("border-orange-500");

  userCards
    .filter((card) => {
      return card.attributes["data-user-id"].value != selectedUser.id;
    })
    .forEach((card) => {
      card.classList.remove("border-orange-500");
    });
}

document.getElementById("deleteUserBtn").addEventListener("click", () => {
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
});
