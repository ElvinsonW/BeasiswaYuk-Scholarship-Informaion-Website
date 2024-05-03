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

const historyBtn = document.getElementById('history');
const forumBtn = document.getElementById('forumact');
const favoriteBtn = document.getElementById('favorite');
const ratedBtn = document.getElementById('rated');

const riwayatContent = document.getElementById('riwayat-content');
const favContent = document.getElementById('favorite-content');
const ratedContent = document.getElementById('rated-content');
const forumContent = document.getElementById('forum');

function hideContent(){
    riwayatContent.style.display = "none"
    favContent.style.display = "none"
    ratedContent.style.display = "none"
    forumContent.style.display = "none"

    historyBtn.style.color = "#FFF"
    forumBtn.style.color = "#FFF"
    favoriteBtn.style.color = "#FFF"
    ratedBtn.style.color = "#FFF"
}

function showContent(nav,content) {
    hideContent();
    nav.style.color = "#FFF712"
    content.style.display = 'flex';
};

historyBtn.addEventListener('click', () => {
    showContent(historyBtn,riwayatContent);
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
    showContent(favoriteBtn,favContent);
});

ratedBtn.addEventListener('click', () => {
    showContent(ratedBtn,ratedContent);
});

showContent(historyBtn,riwayatContent);

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
  window.location.href = "profile.html"
})

let bca = document.getElementById("bca")
bca.addEventListener("click",function(){
  window.location.href = "../Detail Beasiswa/detail.html"
})