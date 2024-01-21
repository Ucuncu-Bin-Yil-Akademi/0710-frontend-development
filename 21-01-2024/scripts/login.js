const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", function () {
    const usernameVal = document.getElementById("username").value;
    const passwordVal = document.getElementById("password").value;

    const registeredUsers = localStorage.getItem("kullanicilar"); // STRING olarak getirir
    const registeredUsersParsed = JSON.parse(registeredUsers); // JSON formatına çevirir

    let isLoginSuccessful = false;

    registeredUsersParsed.forEach(user => {
        if(usernameVal === user.username && passwordVal === user.password){
            alert("Login successful");
            isLoginSuccessful = true;
            window.location.href = "/dashboard.html";
        }
    });

    if(!isLoginSuccessful){
        alert("Login failed");
    }
});