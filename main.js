
const form = document.getElementById("contact");
const names = [];
const tel = [];

let lines = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addContact();
  updateContactList();
});

function addContact() {
  const inputName = document.getElementById("name");
  const inputTel = document.getElementById("tel");

  names.push(inputName.value);
  tel.push(inputTel.value);

  let line = `
    <tr>
    <td>${inputName.value}</td>
    <td>${inputTel.value}</td>
    </tr>
    `

  lines += line;

  inputName.value = "";
  inputTel.value = "";
}

function updateContactList() {
  const contactsList = document.getElementById("contactList");

  contactsList.innerHTML = lines;
}

