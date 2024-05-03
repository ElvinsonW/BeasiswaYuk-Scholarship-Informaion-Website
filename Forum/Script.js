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

// Select the slide banner, banners, and dots
let slide_banner = document.querySelector(".imgs");
let banners = document.querySelectorAll(".banner");
let dots = document.querySelectorAll(".img-navbar li"); 

dots.forEach(function(dot, index) {
  dot.addEventListener("click", function() {
    dots.forEach(function(dot) {
      dot.classList.remove("active");
    });
    dot.classList.add("active");
    slide_banner.style.transform = `translateX(-${index * 100}%)`;
  });
});

let filters = document.querySelectorAll(".filter-subtitle");
let submenu = document.querySelectorAll(".option");
let icon = document.querySelectorAll(".fa-chevron-up");

filters.forEach(function(filter, index) {
    filter.addEventListener("click",function(){
        if(submenu[index].style.display === "none"){
            icon[index].classList.remove("rotate");
            submenu[index].style.display = "block";
        }
        else{
            icon[index].classList.add("rotate");
            submenu[index].style.display = "none";
        }
    })
});

let loveicons = document.querySelectorAll(".beasiswa .interaksi .area:first-child i");

loveicons.forEach(function(loveicon) {
  loveicon.addEventListener("click", function() {
    if (!this.classList.contains("animated-love")) {
      this.classList.add("animated-love");
      this.style.color = "#EB5050";

    } else {
      this.classList.remove("animated-love");
      this.style.color = "#9CA0B0";
    }
  });
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

let likeBtn = document.querySelectorAll("#like-btn");
let replyBtn = document.querySelectorAll("#reply-btn");
let shareBtn = document.querySelectorAll("#share-btn");
let saveBtn = document.querySelectorAll("#bookmark-btn");

likeBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    if (!btn.classList.contains("red")) {
      btn.classList.add("red");
    } else {
      btn.classList.remove("red");
    }
  });
});

replyBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    if (!btn.classList.contains("reply")) {
      btn.classList.add("reply");
    } else {
      btn.classList.remove("reply");
    }
  });
});

shareBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    if (!btn.classList.contains("share")) {
      btn.classList.add("share");
    } else {
      btn.classList.remove("share");
    }
  });
});

saveBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    if (!btn.classList.contains("bookmark")) {
      btn.classList.add("bookmark");
    } else {
      btn.classList.remove("bookmark");
    }
  });
});
