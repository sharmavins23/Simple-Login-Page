// Global data
var loginData = {};

function swapForm(event) {
    // Stop default behavior on link click
    event.preventDefault();

    // Get document elements
    let registerForm = document.getElementsByClassName("register-form")[0];
    let loginForm = document.getElementsByClassName("login-form")[0];

    // Get document element ID
    let currentForm = event.target.parentNode;

    // Swap based on parent
    if (currentForm.className == "register-form") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else if (currentForm.className == "login-form") {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    } else {
        // This should not happen
        alert("Error: Swap state failed. You should not see this message.");
    }
}

function registerClicked(event) {
    // Scrape information from form
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let schoolName = document.getElementById("schoolname").value;

    // Generate a username
    let username = firstName[0] + lastName[0] + schoolName.split(" ")[0];

    alert(`Your username to log in is ${username}`);

    loginData[username] = {
        first: firstName,
        last: lastName,
        school: schoolName,
    };

    swapForm(event);
}

function logOnClicked(event) {
    // Scrape information from form
    let username = document.getElementById("username").value;

    if (loginData.hasOwnProperty(username)) {
        // Save information
        let user = loginData[username];

        alert(`Welcome back, ${user.first} ${user.last}!`);
    } else {
        alert("Error: Invalid username.");
    }
}
