
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop && currentScroll > 200){
    // Scrolling down
    document.querySelector(".header").style.top = "-200px"; 
  } else {
    // Scrolling up or at the top
    document.querySelector(".header").style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}, false);

let loginBtn = document.querySelector(".login-btn")
loginBtn.addEventListener("click",function(){
  window.location.href = "../Loginpage/loginpage.html"
})

let signupBtn = document.getElementById("sign-up-btn")
let profileBtn = document.getElementById("profile-btn")
document.addEventListener("DOMContentLoaded", function() {
  if (sessionStorage.getItem('isLoggedIn') === 'true') {
    loginBtn.style.display = "none"
    signupBtn.style.display = "none"
  
    profileBtn.style.display = "block"
  }
})

profileBtn.addEventListener("click",function(){
  window.location.href = "../Profile/profile.html"
})

let backBtn = document.getElementById("back")
backBtn.addEventListener("back",function(){
  window.location.href = "../Profile/profile.html"
})