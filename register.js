
function onRegister(){

  alert('Welcome');
  localStorage.setItem("mid",document.forms.registerForm.email.value);
  localStorage.setItem("mpswd",document.forms.registerForm.password.value);
  localStorage.setItem("fname",document.forms.registerForm.inputfname.value);
  localStorage.setItem("lname",document.forms.registerForm.inputlname.value);
  localStorage.setItem("movie",document.forms.registerForm.inputcourse.value);
  localStorage.setItem("gender",document.forms.registerForm.gender.value);
  localStorage.setItem("address",document.forms.registerForm.address.value);
 
    document.location.href="./login.html";
    return false;
}

