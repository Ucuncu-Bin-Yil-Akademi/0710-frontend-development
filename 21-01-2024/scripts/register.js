const registerBtn = document.getElementById("register");

registerBtn.addEventListener("click", function () {
  const name = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const username = document.getElementById("username").value;
  const mail = document.getElementById("mail").value;
  const bio = document.getElementById("bio").value;
  const password = document.getElementById("password").value;
  const repassword = document.getElementById("repassword").value;
  if (password !== repassword) {
    alert("Passwords do not match");
    return;
  }

  const user = {
    name,
    lastname,
    username,
    mail,
    bio,
    password,
    date: new Date().toLocaleDateString(),
  };

  let users = [];

  const currentUsers = localStorage.getItem("kullanicilar");
  const currentUsersParsed = JSON.parse(currentUsers);

  users = currentUsersParsed ? currentUsersParsed : [];

  users.push(user);

  localStorage.setItem("kullanicilar", JSON.stringify(users));

  alert("User registered successfully")
});
