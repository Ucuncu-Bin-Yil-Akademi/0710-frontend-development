const registeredUsers = localStorage.getItem("kullanicilar"); // STRING olarak getirir
const registeredUsersParsed = JSON.parse(registeredUsers); // JSON formatına çevirir

const usersListEl = document.getElementById("userList");

document.getElementById("userCount").innerText = registeredUsersParsed?.length || 0;

registeredUsersParsed.forEach(user => {

    const newDiv = document.createElement("div");
    newDiv.className = "flex flex-col gap-3 bg-gray-200 shadow-lg border border-gray-300 p-5 rounded";


    const childDiv = document.createElement("div");
    childDiv.className = "flex flex-col text-gray-700";

    const _div = document.createElement("div");
    _div.className = "bg-gray-300 p-2 rounded flex gap-5 items-center";


    const iTagIcon = document.createElement("i");
    iTagIcon.className = "fa-solid fa-user text-3xl";

    const _div2 = document.createElement("div");
    _div2.className = "text-sm flex flex-col text-gray-500";

    const spanTag1 = document.createElement("span");
    const spanTag2 = document.createElement("span");

    spanTag1.innerText = `${user.name} ${user.lastname}`;
    spanTag2.innerText = "@" + user.username;

    _div2.appendChild(spanTag1);
    _div2.appendChild(spanTag2);


    _div.appendChild(iTagIcon);
    _div.appendChild(_div2);

    childDiv.appendChild(_div);

    newDiv.appendChild(childDiv);

    const childSpan = document.createElement("span");
    childSpan.className = "text-gray-500 italic";

    const pTagBio = document.createElement("p");
    pTagBio.innerText = user.bio;

    const spanDate = document.createElement("span");
    spanDate.className = "flex justify-end text-xs mt-3";

    const iTag = document.createElement("i");
    iTag.className = "bg-gray-300 p-1 rounded";
    iTag.innerText = user?.date || '-';

    spanDate.appendChild(iTag);

    childSpan.appendChild(pTagBio);
    childSpan.appendChild(spanDate);

    newDiv.appendChild(childSpan);

    usersListEl.appendChild(newDiv);
});