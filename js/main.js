$('.owl-carousel').owlCarousel({
   center: true,
   items:3,
   loop:true,
   margin:10,
   nav: true,
   navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
   autoplay: true,
   responsive:{
      0: {
         items: 1,
       },
       600: {
         items: 2,
       },
       1200: {
         items: 3,
       },
   }
});

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "assets/images/light.svg";
  } else {
    this.firstElementChild.src = "assets/images/dark.svg";
  }
  document.body.classList.toggle("light");
});


function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "-58%";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  document.getElementById("home").style.left = "-100%";
  document.getElementById("feature").style.left = "-100%";
  document.getElementById("plan").style.left = "-100%";
  document.getElementById("global").style.left = "-100%";
  document.getElementById("footer").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
document.getElementById("home").addEventListener("click", closeNavbar);
document.getElementById("feature").addEventListener("click", closeNavbar);
document.getElementById("plan").addEventListener("click", closeNavbar);
document.getElementById("global").addEventListener("click", closeNavbar);
document.getElementById("footer").addEventListener("click", closeNavbar);


window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}

const loading = document.getElementById("loader");


setTimeout(() => {
  loading.classList.add("loading-none");
}, 700);

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

  
AOS.init();
