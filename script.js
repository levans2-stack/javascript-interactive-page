// ========================================
// DOM INTERACTION 1
// Change the message
// ========================================

const changeButton = document.querySelector("#changeButton");
const message = document.querySelector("#message");

changeButton.addEventListener("click", function () {
    message.textContent = "You successfully changed the content!";
});


// ========================================
// DOM INTERACTION 2
// Display name while typing
// ========================================

const nameInput = document.querySelector("#nameInput");
const nameDisplay = document.querySelector("#nameDisplay");

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


// ========================================
// DOM INTERACTION 3
// Add items to the list
// ========================================

const itemInput = document.querySelector("#itemInput");
const addButton = document.querySelector("#addButton");
const itemList = document.querySelector("#itemList");

addButton.addEventListener("click", function () {

    const itemText = itemInput.value.trim();

    if (itemText !== "") {

        const newItem = document.createElement("li");

        newItem.textContent = itemText;

        itemList.appendChild(newItem);

        itemInput.value = "";
    }

});


// ========================================
// REQUIRED FORM VALIDATION
// ========================================

const contactForm = document.querySelector("#contactForm");

const contactName = document.querySelector("#contactName");
const contactEmail = document.querySelector("#contactEmail");
const contactMessage = document.querySelector("#contactMessage");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");


contactForm.addEventListener("submit", function (event) {

    let isValid = true;

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";


    // Check name
    if (contactName.value.trim() === "") {

        nameError.textContent = "Please enter your name.";

        isValid = false;
    }


    // Check email
    if (contactEmail.value.trim() === "") {

        emailError.textContent = "Please enter your email.";

        isValid = false;

    } else if (!contactEmail.value.includes("@")) {

        emailError.textContent = "Please enter a valid email address.";

        isValid = false;
    }


    // Check message
    if (contactMessage.value.trim() === "") {

        messageError.textContent = "Please enter a message.";

        isValid = false;
    }


    // Prevent submission if there are errors
    if (!isValid) {

        event.preventDefault();

    }

});


// ========================================
// CLEAR FORM ERRORS
// ========================================

contactName.addEventListener("input", function () {

    if (contactName.value.trim() !== "") {

        nameError.textContent = "";

    }

});


contactEmail.addEventListener("input", function () {

    if (contactEmail.value.trim() !== "") {

        emailError.textContent = "";

    }

});


contactMessage.addEventListener("input", function () {

    if (contactMessage.value.trim() !== "") {

        messageError.textContent = "";

    }

});


// ========================================
// API FETCH BONUS
// Random Fun Fact
// ========================================

const factButton = document.querySelector("#factButton");
const fact = document.querySelector("#fact");


factButton.addEventListener("click", function () {

    fact.textContent = "Loading...";


    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")

        .then(function (response) {

            if (!response.ok) {

                throw new Error("Unable to get a fun fact.");

            }

            return response.json();

        })

        .then(function (data) {

            fact.textContent = data.text;

        })

        .catch(function () {

            fact.textContent =
                "Sorry, we couldn't load a fun fact right now. Please try again.";

        });

});
