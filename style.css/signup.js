let btnlogin= document.getElementById("login");
let btnsignup= document.getElementById("signup");
let signin =document.querySelector(".signin");
let signup =document.querySelector(".signup");
btnlogin.onclick= function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");
}
btnSignUp.onclick = function(){
    signIn.classList.remove("active");
    signUp.classList.remove("inActive");
 }
 
