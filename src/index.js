// Global data
var loginData = {};

function swapForm(event) {
    // Get document elements
    registerForm = document.getElementsByClassName("register-form")[0];
    loginForm = document.getElementsByClassName("login-form")[0];

    // Get document element ID
    currentFormID = event.target.id;

    // Swap based on the current ID
    switch (currentFormID) {
        case "loginSwap":
            loginForm.style.display = "none";
            registerForm.style.display = "block";
            break;
        case "registerSwap":
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            break;
    }
}

function registerClicked(event) {
    // Scrape information from form
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let school = document.getElementById("schoolname").value;

    // Generate a username
    let username = firstName[0] + lastName[0] + school.split(" ")[0];

    alert(username);
}

function logOnClicked(event) {
    // Scrape information from form
    let username = document.getElementById("username").value;
}
