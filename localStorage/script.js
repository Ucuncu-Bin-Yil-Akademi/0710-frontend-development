let inputElm = document.getElementById("firstName");
let saveBtn = document.getElementById("saveButton");
let clearBtn = document.getElementById("clearButton");
let outputElm = document.getElementById("output");

let localStorageValue = localStorage.getItem("firstNameValue");
if (localStorageValue) {
  inputElm.value = localStorageValue;
  outputElm.innerText = localStorageValue;
}

function saveName(event) {
  event.preventDefault();
  let firstName = inputElm.value;
  outputElm.innerText = firstName;
  localStorage.setItem("firstNameValue", firstName);
}

function clearName() {
  inputElm.value = "";
  outputElm.innerText = "";
  localStorage.removeItem("firstNameValue");
}

saveBtn.addEventListener("click", saveName);
clearBtn.addEventListener("click", clearName);
