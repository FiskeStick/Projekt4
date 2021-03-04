
     function togglePassword() {
var upass = document.getElementById('upass');
var toggleBtn = document.getElementById('toggleBtn');
if(upass.type == "password"){
upass.type = "text";
toggleBtn.value = "Hide Password";
} else {
upass.type = "password";
toggleBtn.value = "Show Password";
}
}

  function validate(){
 var mail = document.getElementById('liletabel').value;

var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

     if(regx.test(mail)){
 alert("You have provided a valid Email ID");
 return true
 }
 else{
 alert("Sorry! Incorrect Email ID");
 return false;
 }

 }
