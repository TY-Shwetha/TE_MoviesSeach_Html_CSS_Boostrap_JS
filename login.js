
function onLogin() {
    // localStorage.setItem("mid","shwetha@gmail.com");
    // localStorage.setItem("mpswd","123");
    var emp=localStorage.getItem('mid');
    var pswd=localStorage.getItem('mpswd');
    var email=document.forms.loginForm.email.value;
    var password=document.forms.loginForm.password.value;
   
    if(emp==email && pswd==password){
        alert('welcome');
    console.log(document.forms.loginForm.email.value);
    console.log(document.forms.loginForm.password.value);
    document.location.href="./search.html";
        return false;
    }else{
        alert('Please Register yourself')
        document.location.href="./register.html";
        return false;
    }
}