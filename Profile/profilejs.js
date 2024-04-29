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

let login_btn = document.querySelector(".login-btn")
login_btn.addEventListener("click", function(){
  window.location.href = "../Loginpage/loginpage.html"
})

const carousel = document.querySelector(".slider")
const arrowBtns = document.querySelectorAll(".scholarship-slider i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth + 40;

let click;

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id === "left-arrow" ? -firstCardWidth : firstCardWidth;
      if(btn.id === "left-arrow") click = "left";
      else click = "right";
  });
});


const infiniteScroll = () => {
  if (Math.ceil(carousel.scrollLeft) >= carousel.scrollWidth - carousel.offsetWidth) {
      carousel.scrollLeft = 0;
  }
};

carousel.addEventListener("scroll",infiniteScroll);

const historyBtn = document.getElementById('history');
const forumBtn = document.getElementById('forumact');
const favoriteBtn = document.getElementById('favorite');
const ratedBtn = document.getElementById('rated');

const scholarshipContent = document.getElementById('scholarship');
const forumContent = document.getElementById('forum');

const riwayatTitle = document.getElementById('riwayat-title')
const favTitle = document.getElementById('fav-title')
const ratedTitle = document.getElementById('rated-title')

const riwayatTitleh4 = document.querySelector(".riwayat-title h4")
const favTitleh4 = document.querySelector(".fav-title h4")
const ratedTitleh4 = document.querySelector(".rated-title h4")

function hideContent(){
    scholarshipContent.style.display = "none"
    forumContent.style.display = "none"
}

function hideScholarshipTitle(){
    riwayatTitle.style.display = "none"
    favTitle.style.display = "none"
    ratedTitle.style.display = "none"
    historyBtn.style.color = "#fff"
    forumBtn.style.color = "#fff"
    favoriteBtn.style.color = "#fff"
    ratedBtn.style.color = "#fff"
}

function showContent(nav,content) {
    hideContent();
    hideScholarshipTitle();
    nav.style.color = "#FFF712"
    content.style.display = 'flex';
};

historyBtn.addEventListener('click', () => {
    showContent(historyBtn,scholarshipContent);
    riwayatTitle.style.display = "flex"
});

forumBtn.addEventListener('click', () => {
    showContent(forumBtn,forumContent);

    const postBtn = document.getElementById("post-nav")
    const repliesBtn = document.getElementById("replies-nav")
    const likesBtn = document.getElementById("likes-nav")

    const postContent = document.getElementById("post-content")
    const repliesContent = document.getElementById("replies-content")
    const likesContent = document.getElementById("likes-content")

    function resetNav(button){
        button.style.border = "none"
        button.style.backgroundColor = "#FFF712"
        button.style.color = "#000"
    }

    function hideTweet(){
        postContent.style.display = "none"
        repliesContent.style.display = "none"
        likesContent.style.display = "none"
    }

    function btnclicked(button){
        hideTweet();
        
        resetNav(postBtn)
        resetNav(repliesBtn)
        resetNav(likesBtn)

        button.style.border = "2px solid #FFF712"
        button.style.backgroundColor = "#000"
        button.style.color = "#fff"
    }

    postBtn.addEventListener("click", function(){
        btnclicked(postBtn)
        postContent.style.display = "flex"
    })

    repliesBtn.addEventListener("click", function(){
        btnclicked(repliesBtn)
        repliesContent.style.display = "flex"
    })

    likesBtn.addEventListener("click", function(){
        btnclicked(likesBtn)
        likesContent.style.display = "flex"
    })

    btnclicked(postBtn)
    postContent.style.display = "flex"
});

favoriteBtn.addEventListener('click', () => {
    showContent(favoriteBtn,scholarshipContent);
    favTitle.style.display = "flex"
});

ratedBtn.addEventListener('click', () => {
    showContent(ratedBtn,scholarshipContent);
    ratedTitle.style.display = "flex"
});

showContent(historyBtn,scholarshipContent);
riwayatTitle.style.display = "flex"

let seemoreBtn = document.getElementById("see-more-btn")

seemoreBtn.addEventListener("click", function(){
  if(riwayatTitle.style.display === "flex"){
    window.location.href = "../Riwayat Pencarian/riwayat.html"
  }
  else if(favTitle.style.display === "flex"){
    window.location.href = "../Disukai/disukai.html"
  }
  else if(ratedTitle.style.display === "flex"){
    window.location.href = "../Dirating/dirating.html"
  }
})

let loginBtn = document.querySelector(".login-btn")
loginBtn.addEventListener("click",function(){
  window.location.href = "loginpage.html"
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
  window.location.href = "./Profile/profile.html"
})