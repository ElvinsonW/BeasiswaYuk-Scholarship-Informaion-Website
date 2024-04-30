let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop && currentScroll > 200){
    // Scrolling down
    document.querySelector(".header").style.top = "-200px"; // Adjust this value according to your header height
  } else {
    // Scrolling up or at the top
    document.querySelector(".header").style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
},false);

let banners = document.querySelectorAll(".banner");

banners.forEach(function(banner,index){
  banner.addEventListener("click", function(){
    let bannerClicked = document.querySelector(".banner-clicked");
    bannerClicked.classList.remove("banner-clicked");
    banner.classList.add("banner-clicked");
  });
});

let requirement_thumbnail = document.querySelector(".requirement .thumbnail");
let arrow = document.querySelector(".requirement .thumbnail i");
let requirement_content = document.querySelector(".requirement .content");

requirement_thumbnail.addEventListener("click",function(){
  if(requirement_content.style.display === "none"){
    requirement_content.style.display = "grid";
    arrow.classList.remove("rotate");
  }
  else{
    requirement_content.style.display = "none";
    arrow.classList.add("rotate");
  }
});

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