const navBar = document.querySelector(".nav_links");
const goupsign = document.querySelector(".fa-angles-up");
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function () {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})
prev.addEventListener('click', function () {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
})
const media = () => {
    let width = matchMedia("(min-width: 800px)");
    if (width.matches) {
        navBar.style.right = "0px";
    }
    else {
        navBar.style.right = "-1200px";
    }
}

window.onscroll = function () {
    if (this.scrollY >= 100) {
        goupsign.style.display = "block";
        // this.scrollY= 0;
        // console.log(this.scrollY);
    }
    else {
        goupsign.style.display = "none";
    }
}

goupsign.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function openSideBar() {
    navBar.style.right = "0px";
    // goupsign.style.display = "none";
}
function closeSideBar() {
    navBar.style.right = "-1200px";
    // goupsign.style.display = "block";
}
onload = media;
onresize = media;