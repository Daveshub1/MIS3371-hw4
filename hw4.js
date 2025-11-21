/*
Program name: patient-form.html
Author: David Joseph
Date created: 09/08/2025
Date last edited: 11/21/2025
Version: 1.0
Description: New patient intake form JS
*/

//dynamic date js code//
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code//
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {output.innerHTML = this.value;};

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");

    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// Validate First Name
function validateFname() {
   let fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

// Validate middle  initial
function validateMini() {
   let mini = document.getElementById("mini").value.trim();
    var namePattern = /^[A-Z]$/;

    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (mini === "") {
        document.getElementById("mini-error").innerHTML = "";
        return true; // allow empty

    }if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}


// Validate Last Name
function validateLname() {
   let lname = document.getElementById("lname").value.trim();
   var namePattern = /^[a-zA-Z'-]+$/;

        if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty.";
        return false;
    }  else if (lname != "") {
        if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}


//dob validation js code//
function validateDob() {
   const dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

//ssn validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

    //regex for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, ""); //removes non digits

    if (phone.length == 0) {
        document.getElementById("phone-error").innerHTML = 
        "Phone number can't be blank.";
        return false;
    }

    if (phone.length < 10) {
    document.getElementById("phone-error").innerHTML = 
    "Please enter a 10-digit phone number.";
    return false;
}

    const formattedPhone = 
    phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

function validateEmail() {
    const email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (email =="") {
        document.getElementById("email-error").innerHTML = 
        "Email cannot be empty.";
        return false;
    } else if (!email.match(emailR)){
        document.getElementById("email-error").innerHTML =
        "Please enter a valid email address.";
        return false;
    } else {
    document.getElementById("email-error").innerHTML = "";
    return true;
    }
}    

function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);
    
    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = 
        "Please input an address";
        return false;

    } else {
    document.getElementById("address1-error").innerHTML = "";
    return true;
    }
}  

function validateAddress2() {
    var ad2 = document.getElementById("address2").value;
    console.log(ad2);
    console.log(ad2.length);
    
    if (ad2.length > 0 && ad2.length < 2) {
        document.getElementById("address2-error").innerHTML = 
        "Please input at least two characters";
        return false;

    } else {
    document.getElementById("address2-error").innerHTML = "";
    return true;
    }
}

function validateCity() {
    var city = document.getElementById("city").value.trim();
    console.log(city);
    console.log(city.length);

    if (!city) {
        document.getElementById("city-error").innerHTML = 
        "City cannot be empty";
        return false;

    } else {
    document.getElementById("city-error").innerHTML = "";
    return true;
    }
}    
    
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

function validateUid() {
    const uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 15) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't exceed 15 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

//password validation code goes here:
function validatePassword() {
    const pword   = document.getElementById("pword").value;
    const uid   = document.getElementById("uid").value;

    const errorMessage = [];

//check for lowercase letters:
if (!pword.match(/[a-z]/)) {errorMessage.push("Enter at least one lowercase letter");
}
if (!pword.match(/[A-Z]/)) {errorMessage.push("Enter at least one uppercase letter");
}
if (!pword.match(/[0-9]/)) {errorMessage.push("Enter at least one number");
}
if (!pword.match(/[!@#$%&*\-_.+()]/)) {errorMessage.push("Enter at least one special character");
}
if (pword.includes(uid)) {errorMessage.push("Password can't contain user ID");
}
if (pword === "") {
errorMessage.push("Password cannot be blank");
}


const errorContainer = document.querySelector(".pword-message");
errorContainer.innerHTML = errorMessage
.map((message) => `<span>${message}</span><br/>`).join("");

return errorMessage.length === 0;

}

function confirmPassword() {
    const pword1 = document.getElementById("pword").value;
    const pword2 = document.getElementById("con_pword").value;
    const uid = document.getElementById("uid").value;
    const error = document.getElementById("pword2-error");

    if (pword1.toLowerCase().includes(uid.toLowerCase())) {
        error.innerHTML = "Password can't contain user ID";
        return false;
    }

    if (pword2 === "") {
        error.innerHTML = "";
        return false;
    }

    if (pword1 !== pword2) {
        error.innerHTML = "Passwords don't match";
        error.style.color = "red";
        return false;
    }

    error.innerHTML = "Passwords match";
    error.style.color = "green";
    return true;
}


function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (["pword", "con_pword", "ssn"].includes(formcontent.elements[i].id)) {
    continue;
        }
    if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    if (formoutput.length > 0) {
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
    }
}


function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//shows alert box when  necessary js code
function showAlert () {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function () {
        alertBox.style.display = "none";
    }
}

function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePassword()) {
        valid = false;
    }
    if (!confirmPassword()) {
        valid = false;
    }
      if (valid) {
        document.getElementById("alert-box").style.display = "none";

        document.getElementById("submit").style.display = "inline";

        alert("Required fields are filled! You may now submit your form.");

    } else {
        showAlert();
        document.getElementById("submit").style.display = "none";
    }
}

// cookie for remembering info input on form//
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    { id: "fname",    cookieName: "firstName" },
    { id: "mini",     cookieName: "middleInitial" },
    { id: "lname",    cookieName: "lastName" },
    { id: "dob",      cookieName: "dateOfBirth" },
    { id: "phone",    cookieName: "phoneNumber" },
    { id: "email",    cookieName: "email" },
    { id: "address1", cookieName: "address1" },
    { id: "address2", cookieName: "address2" },
    { id: "city",     cookieName: "city" },
    { id: "zcode",    cookieName: "zipCode" },
    { id: "uid",      cookieName: "userId" }
]

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // Prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // Set a cookie with input value when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

//greet the user with their name + message if the cookie is set
var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}
