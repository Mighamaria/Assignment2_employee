let Firstname = document.getElementById("Firstname");
let num = document.getElementById("num");
let mail = document.getElementById("mail");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let regexpname= /^([A-Za-z]+)$/;
//number
let regexpnum1= /^([0-9]{10})$/;
let regexpnum2= /^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/;
let regexpnum3= /^([0-9]{3}).([0-9]{3}).([0-9]{4})$/;
let regexpnum4= /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
// mail
let regexpemail= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

// username validation

function nameValidation() {
    if (regexpname.test(Firstname.value)){
        error1.innerHTML="valid firstname";
        error1.style.color="green";
        return numValidation();
    }

    else {
        error1.innerHTML="firstname can have include A-Z , a-z  ";
        error1.style.color="red";
        return false;
    }
}


// phone number validation
function numValidation() {
if(if (isNaN(num) || num < 1 || num > 10) {
    text = "Input not valid";
  } 
  {
    error2.innerHTML = "valid phone number";
    error2.style.color = "green";
    return mailValidation() ;
    }

else {
    error2.innerHTML = "Accepted formats are: XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX";
    error2.style.color = "red";
    return false;

}    
}

// mail validation

function mailValidation()   {
if(regexpemail.test(mail.value))
{
    error3.innerHTML = "valid mail-id";
    error3.style.color = "green";
    return true;
}

else {
    error3.innerHTML = "invalid mail-id";
    error3.style.color = "red";
    return false;
}
}
