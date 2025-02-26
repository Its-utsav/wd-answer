function handleValidation(e) {
    var isValid = true;

    var username = $("#username").val();
    if (!username || !isNaN(username)) {
        $("#namewarn").text("Enter your name").css("display", "block");
        isValid = false;
    } else {
        $("#namewarn").text("").css("display", "none");
    }

    var phone = $("#phone").val();
    if (phone.length !== 10) {
        $("#phoneno").text("Phone number should be 10 digits").css("display", "block");
        isValid = false;
    } else {
        $("#phoneno").text("").css("display", "none");
    }

    var age = $("#age").val();
    if (age < 16) {
        $("#ageno").text("Minimum age should be 16").css("display", "block");
        isValid = false;
    } else {
        $("#ageno").text("").css("display", "none");
    }

    var gender = $('input[name="gender"]:checked').val();
    if (!gender) {
        $("#genderwarn").text("Please select a gender").css("display", "block");
        isValid = false;
    } else {
        $("#genderwarn").text("").css("display", "none");
    }

    var city = $("#city").val();
    if (!city) {
        $("#citywarn").text("Please select a city").css("display", "block");
        isValid = false;
    } else {
        $("#citywarn").text("").css("display", "none");
    }

    var email = $("#email").val();
    if (email.indexOf("@") < 1 || email.lastIndexOf(".") - email.indexOf("@") < 2) {
        $("#emailwarn").text("Please enter a valid email").css("display", "block");
        isValid = false;
    } else {
        $("#emailwarn").text("").css("display", "none");
    }

    var password = $("#password").val();
    if (password.length < 8) {
        $("#passwordwarn").text("Password should be at least 8 characters").css("display", "block");
        isValid = false;
    } else {
        $("#passwordwarn").text("").css("display", "none");
    }

    if (!isValid) {
        e.preventDefault();
    }
    return isValid;
}
