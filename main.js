// Does nothing yet...
function renderdropdown() {
    for (i = 0; i <= rows.length; i++) {
        tablestring += '<tr>';
        document.getElementById('tablediv').innerHTML = tablestring;
        for (j = 0; j <= rows[i].length - 1; j++) {
            tablestring += '<td>' + rows[i][j] + '</td>';
        }
        tablestring+= '</tr>';
    }
    tablestring += '</table>';
}


// var okay = true;
var check = {pass:false, date:false, name:false, post:false, email:false}

function register() {
    var password = document.forms["Form"]["password"].value;
    var confirm = document.forms["Form"]["confirmPassword"].value;
    var date = document.forms["Form"]["date"].value;
    var firstName = document.forms["Form"]["firstName"].value;
    var lastName = document.forms["Form"]["lastName"].value;
    var postcode = document.forms["Form"]["postcode"].value;
    var email = document.forms["Form"]["email"].value;

    // checkpassword();
    if (password == "" || confirm == "" || password != confirm) {
        document.getElementById("passwordMatch").style.visibility = "visible";
        // okay = false;
    }
    else {
        check.pass = true;
    }
    // checkdate();
    if (date == "" ) {
        document.getElementById("dateMissing").style.visibility = "visible";
        // okay = false;
    }
    else {
        check.date = true;
    }
    // checknames();
    if (firstName == "" || lastName == "") {
        document.getElementById("nameMissing").style.visibility = "visible";
        // okay = false;
    }
    else {
        check.name = true;
    }
    // checkpost();
    if (postcode == "" ) {
        document.getElementById("postcodeMissing").style.visibility = "visible";
        // okay = false;
    }
    else {
        check.post = true;
    }
    // checkemail();
    if (email == "" ) {
        document.getElementById("emailMissing").style.visibility = "visible";
        // okay = false;
    }
    else {
        check.email = true;
    }
    console.log(check);
    if (check.pass && check.date && check.name && check.post && check.email) {
        alert('Sign up successful.')
        window.location.href = 'created.html';
        // okay = true;
    }
    return false;
    getRegisterVar();
}

function getRegisterVar() {
    alert(okay)
}

function formOnBlur() {
    var password = document.forms["Form"]["password"].value;
    var confirm = document.forms["Form"]["confirmPassword"].value;
    var date = document.forms["Form"]["date"].value;
    var firstName = document.forms["Form"]["firstName"].value;
    var lastName = document.forms["Form"]["lastName"].value;
    var postcode = document.forms["Form"]["postcode"].value;
    var email = document.forms["Form"]["email"].value;

    if (firstName != "" && lastName != "") {
        document.getElementById("nameMissing").style.visibility = "hidden";
    }
    if (date != "" ) {
        document.getElementById("dateMissing").style.visibility = "hidden";
    }
    if (postcode != "" ) {
        document.getElementById("postcodeMissing").style.visibility = "hidden";
        okay = false;
    }
    if (email != "" ) {
        document.getElementById("emailMissing").style.visibility = "hidden";
        okay = false;
    }
}

function search(){
    var searchBar = document.forms["Form"]["searchBar"].value;
    var postcode = document.forms["Form"]["postcode"].value;
    var suburb = document.forms["Form"]["suburb"].value;
    // var rating = document.forms["Form"]["rating"].value;
    if (searchBar == "Brisbane" || searchBar == "brisbane") {
        window.location.href = 'pages/results/brisbane.html';
    }
    if (postcode == "4017") {
        alert(postcode);
        window.location.href = '4017.html';
    }
    if (suburb == "brisbane") {
        window.location.href = 'pages/results/brisbane.html';
    }
    if (suburb == "brisbane-city") {
        window.location.href = 'pages/results/brisbane.html';
    }
    if (suburb == "braken-ridge") {
        window.location.href = 'pages/results/braken-ridge.html';
    }
    // if (rating == "3") {
    //     window.location.href = 'pages/results/brisbane.html';
    // }
    else {
        document.getElementById("noSelection").style.visibility = "visible";
    }
    return false;
}

function searchOn() {
    var searchBar = document.forms["Form"]["searchBar"].value;
    var postcode = document.forms["Form"]["postcode"].value;
    var suburb = document.forms["Form"]["suburb"].value;
    document.getElementById("noSelection").style.visibility = "hidden";
}

