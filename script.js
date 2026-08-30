// Button changes the message
const changeButton = document.getElementById("changeButton");
const message = document.getElementById("message");

changeButton.addEventListener("click", function () {
    message.textContent = "You successfully changed the content!";
});


// Style changes while typing
const nameInput = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");

nameInput.addEventListener("input", function () {
    nameDisplay.textContent = nameInput.value;

    if (nameInput.value.length > 0) {
        nameDisplay.style.color = "purple";
        nameDisplay.style.fontSize = "24px";
    } else {
        nameDisplay.textContent = "Your name will appear here.";
        nameDisplay.style.color = "black";
        nameDisplay.style.fontSize = "20px";
    }
});


// Add items to the list
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");

addButton.addEventListener("click", function () {
    const itemText = itemInput.value.trim();

    if (itemText !== "") {
        const newItem = document.createElement("li");

        newItem.textContent = itemText;

        itemList.appendChild(newItem);

        itemInput.value = "";
    }
});
// Contact form validation
const contactForm = document.querySelector("#contactForm");
const nameField = document.querySelector("#contactName");
const emailField = document.querySelector("#contactEmail");
const messageField = document.querySelector("#contactMessage");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");

contactForm.addEventListener("submit", function (event) {
    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (nameField.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (emailField.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    }

    if (messageField.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});
