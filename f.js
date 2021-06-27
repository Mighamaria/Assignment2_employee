let username=document.getElementById("username");
let number=document.getElementById("number");
let mail = document.getElementById("mail");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
var nameValidation=function()
    {
      let regexpname= /^([A-Za-z\._]+)$/;

      if(regexpname.test(username.value) )
      {
        error1.innerHTML="Valid username.";
        error1.style.color="green";
        return numValidation();
        
      }
     else{
    
        error1.innerHTML="Username can include A-Z , a-z  only.";
        error1.style.color="red";
        return false;
    
         } 
      
    }
 var numValidation=function()
    {
      let regexpnum1= /^([0-9]{10})$/;
      if(regexpnum1.test(number.value) )
      {
        error2.innerHTML="Valid contact number.";
        error2.style.color="green";
        return mailValidation();
       
      }
     else{
    
        error2.innerHTML="Accepted formats are: XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX.";
        error2.style.color="red";
        return false;
    
         } 
      
    }

 var mailValidation=function()   {
    let regexpemail= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
if(regexpemail.test(mail.value))
{
    error3.innerHTML = "valid mail-id";
    return true;
}

else {
    error3.innerHTML = "invalid mail-id";
    return false;
}
}
