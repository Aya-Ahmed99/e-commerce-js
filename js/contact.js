var usrname = document.getElementById("username"),
    email = document.getElementById("email"),
    pass = document.getElementById("pass"),
    gender = document.querySelectorAll(".gender"),
    submit = document.getElementById("submit"),
    phone = document.getElementById("phone"),
    nameerror = document.getElementById("nameerror"),
    emailerror = document.getElementById("emailerror"),
    passerror = document.getElementById("passerror"),
    gendererror = document.getElementById("gendererror"),
    message = document.getElementById("message"),
    messerror = document.getElementById("messerror"),
    phoneerror = document.getElementById("phoneerror"),
    flagname = 0,
    flagemail = 0,
    flagpass = 0,
    flaggender = 0,
    regpass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    regxName =  /^([A-Za-z]+){3,}([\ ]?([A-Za-z]+){0,})+$/,
    regxphone = /^01[0125][0-9]{8}$/,
    regxEmail =/^[-a-z0-9~!$%^&*"_=+}{\'?]+(\.[-a-z0-9~!$%^&*"_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]))(:[0-9]{1,5})?$/i;


function checkPhone(username) {
    if (!regxphone.test(phone.value)) {
        phoneerror.innerHTML = "Invalid Phone Number*";
        phone.style.borderColor = "red";
        phoneerror.style.color = "red";
        return false;

    }
    else {
        phoneerror.innerHTML = "";
        phone.style.borderColor = "#ccc";
        return true;

    }
}
function checkName(username) {
    if (!regxName.test(usrname.value)) {
        nameerror.innerHTML = "Vaild Name is Required *";
        username.style.borderColor = "red";
        nameerror.style.color = "red";
        return false;

    }
    else {
        nameerror.innerHTML = "";
        username.style.borderColor = "#ccc";
        return true;

    }
}
function checkmessage(message) {
    if (message.value === "") {
        messerror.innerHTML = "is Required *";
        message.style.borderColor = "red";
        messerror.style.color = "red";
        return false;

    }
    else {
        messerror.innerHTML = "";
        message.style.borderColor = "#ccc";
        return true;

    }
}

function checkEmail(email) {
    if (!regxEmail.test(email.value)) {
        emailerror.innerHTML = "Vaild Email is Required *";
        email.style.borderColor = "red";
        emailerror.style.color = "red";
        return false;
    }
    else {
        emailerror.innerHTML = "";
        email.style.borderColor = "#ccc";
        return true;
    }

}

function checkPassword(pass) {
    if (!regpass.test(pass.value)) {
        passerror.innerHTML = "Minimum eight characters, at least one letter, one number and one special character*";
        pass.style.borderColor = "red";
        passerror.style.color = "red";
        return false;
    }
    else {
        passerror.innerHTML = "";
        pass.style.borderColor = "#ccc";
        return true;
    }
}

function checkGender(gender) {
    var flagcheck = 0;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            flagcheck = 1;
        }
    }
    if (flagcheck != 1) {
        gendererror.innerHTML = "Please Select Your Gender *";
        gendererror.style.color = "red";
        return false;
    }
    else {
        gendererror.innerHTML = "";
        gendererror.style.color = "#ccc";
        return true;
    }
}



submit.onclick = function (e) {
    var valname = checkName(usrname),
        valemail = checkEmail(email),
        valpass = checkPassword(pass),
        valgender = checkGender(gender),
        mess = checkmessage(message),
        phoneval = checkPhone(phone);
    if (valname && valemail && valpass && valgender && mess&&phoneval) {
        console.log("done");
    }
    else {
        e.preventDefault();
    }

}