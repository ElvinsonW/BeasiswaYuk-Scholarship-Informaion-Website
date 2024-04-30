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

const carousel = document.querySelector(".slider")
const arrowBtns = document.querySelectorAll(".trending-slider i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth + 100;

let click;

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id === "left-arrow" ? -firstCardWidth : firstCardWidth;
      if(btn.id === "left-arrow") click = "left";
      else click = "right";
  });
});

document.querySelector("#point-1").style.backgroundColor = "black";

let previousPointIndex = 1;

const scrollPoint = () => {
  document.querySelector("#point-" + previousPointIndex).style.backgroundColor = ""; // Reset color to default

  const currentPointIndex = Math.round(((carousel.scrollLeft+100) / 370));
  document.querySelector("#point-" + currentPointIndex).style.backgroundColor = "black";

  previousPointIndex = currentPointIndex;
};

carousel.addEventListener("scroll",scrollPoint);


let exploreBtn = document.querySelector(".left-banner button")

exploreBtn.addEventListener("click", function(){
  window.location.href = "./ExplorePage/explore.html";
})


let loginBtn = document.querySelector(".login-btn")
loginBtn.addEventListener("click",function(){
  window.location.href = "./Loginpage/loginpage.html"
})

let bca = document.getElementById("bca")
bca.addEventListener("click",function(){
  window.location.href = "../Detail Beasiswa/detail.html"
})

let seemoreBtn = document.getElementById("see-more")
seemoreBtn.addEventListener("click",function(){
  window.location.href = "../ExplorePage/explore.html";
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