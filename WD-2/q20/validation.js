var isValid = true;

function nameValidation() {
    var username = $("#username").val();
    if (!username || !isNaN(username)) {
        $("#namewarn").text("Enter your name");
        $("#namewarn").css("display", "block");
        isValid = false;
    } else {
        $("#namewarn").text(null);
        $("#namewarn").css("display", "none");
    }
}

function phoneValidation() {
    var phone = $("#phone").val();
    if (phone.length !== 10) {
        $("#phoneno").text("Phone number should be 10 digits");
        $("#phoneno").css("display", "block");
        isValid = false;
    } else {
        $("#phoneno").text(null);
        $("#phoneno").css("display", "none");
    }
}

function ageValidation() {
    var age = $("#age").val();
    if (age < 16) {
        $("#ageno").text("Minimum age should be 16");
        $("#ageno").css("display", "block");
        isValid = false;
    } else {
        $("#ageno").text(null);
        $("#ageno").css("display", "none");
    }
}

function genderValidation() {
    var gender = $('input[name="gender"]:checked').val();
    if (!gender) {
        $("#genderwarn").text("Please select a gender");
        $("#genderwarn").css("display", "block");
        isValid = false;
    } else {
        $("#genderwarn").text(null);
        $("#genderwarn").css("display", "none");
    }
}

function cityValidation() {
    var city = $("#city").val();
    if (!city) {
        $("#citywarn").text("Please select a city");
        $("#citywarn").css("display", "block");
        isValid = false;
    } else {
        $("#citywarn").text(null);
        $("#citywarn").css("display", "none");
    }
}

function emailValidation() {
    var email = $("#email").val();

    if (email.indexOf("@") < 1 || email.lastIndexOf(".") - email.indexOf("@") < 2) {
        $("#emailwarn").text("Please enter a valid email");
        $("#emailwarn").css("display", "block");
        isValid = false;
    } else {
        $("#emailwarn").text(null);
        $("#emailwarn").css("display", "none");
    }
}

function passwordValidation() {
    var password = $("#password").val();
    if (password.length < 8) {
        $("#passwordwarn").text("Password should be at least 8 characters");
        $("#passwordwarn").css("display", "block");
        isValid = false;
    } else {
        $("#passwordwarn").text(null);
        $("#passwordwarn").css("display", "none");
    }
}

function handleValidation(e) {
    isValid = true;
    nameValidation();
    phoneValidation();
    ageValidation();
    genderValidation();
    cityValidation();
    emailValidation();
    passwordValidation();
    if (!isValid) {
        e.preventDefault();
    }
}