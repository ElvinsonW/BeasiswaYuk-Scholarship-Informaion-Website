let eyeicon = document.querySelector(".input-pass i");
let password = document.querySelector("#pass");

eyeicon.addEventListener("click",function(){
    if(password.type === "password"){
        password.type = "text";
        eyeicon.classList.remove("fa-eye-slash");
        eyeicon.classList.add("fa-eye");
    }
    else{
        password.type = "password";
        eyeicon.classList.remove("fa-eye");
        eyeicon.classList.add("fa-eye-slash");
    }
});

let login_btn = document.querySelector("#login-btn")

login_btn.addEventListener("click",function(e){

    e.preventDefault()
    let input_email = document.querySelector("#email")
    let input_pass = document.querySelector("#pass")
    let email_error = document.querySelector(".email-error")
    let pass_error = document.querySelector(".pass-error")

    if(input_email.value == "" || input_email.value == undefined){
        email_error.style.display = "block"
        email_error.innerHTML = "*Email must be filled"
    }
    else if(!input_email.value.includes("@") || !input_email.value.endsWith(".com")){
        email_error.style.display = "block";
        email_error.innerHTML = "*Email must contain @ and ends with .com"
    }
    else if(input_pass.value == "" || input_pass.value == undefined){
        pass_error.style.display = "block"
        pass_error.innerHTML = "*Password must be filled"
    }
    else if(!validatePassword(input_pass)){
        pass_error.style.display = "block";
        pass_error.innerHTML = "*Password must at least contains 1 digit, 1 capital letter, and 1 lowercase letter"
    }
    else{
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = "../index.html"
    }
})

function validatePassword(input){
    let containDigit = false
    let containlowercase = false
    let containCapital = false

    for(let i = 0 ; i < input.value.length ; i++){
        let c = input.value[i];
        if(c >= '0' && c <= '9'){
            containDigit = true;
        }
        if(c >= 'A' && c <= 'Z'){
            containCapital = true;
        }
        if(c >= 'a' && c <= 'z'){
            containlowercase = true;
        }
    }

    return containDigit && containlowercase && containCapital
}



