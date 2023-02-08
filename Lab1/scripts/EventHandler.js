var welcomeLabel = document.getElementById("welcome");
var displayEvent = document.getElementById("displayEvent");

var userDisplay = document.getElementById("userDisplay");
var passDisplay = document.getElementById("passDisplay");



function validateForm(){
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["password"].value;

    if (x == ""){
        alert("Name must be filled out");
        return false;
    } else {
        console.log('Username: ${ x } \n Password: ${ y }');
        userDisplay.textContent = x;
        passDisplay.textContent = y;
        return false;
    }
}