document.addEventListener("DOMContentLoaded", function() {
  var nameCard = document.querySelector('.name_card');
  if (!nameCard) return;
  
  var shadow = document.createElement('div');
  shadow.className = 'shadow';
  nameCard.appendChild(shadow);
  
  var gradient = document.createElement('div');
  gradient.style.position = 'absolute';
  gradient.style.top = '0';
  gradient.style.left = '0';
  gradient.style.width = '100%';
  gradient.style.height = '100%';
  gradient.style.borderRadius = '10px';
  gradient.style.zIndex = "-1";
  gradient.style.background = 'linear-gradient(45deg, rgba(0, 146, 63, 0.5), rgba(255, 187, 0, 0.5), rgba(213, 44, 39, 0.5))';
  gradient.style.filter = 'blur(20px)';
  gradient.style.opacity = '0';
  
  shadow.appendChild(gradient);
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function moveSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}


/*
'strict mode';
let bbCard = document.getElementById('baseballCard');
let flipper = document.getElementById('flipper');
let isFlipped = /flipped/gi;

function flip(el) {
  el.className = isFlipped.test(el.className) ? '' : 'flipped'
}

bbCard.addEventListener("click", function() {
  flip(flipper);
}, false);
*/
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

function loadComponent(id, file, cssFile = null) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;

      if (cssFile) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssFile;
        document.head.appendChild(link);
      }
    })
    .catch(error => console.error(error));
}

loadComponent("header", "components/header/header.html", "components/header/header.css");
loadComponent("background", "components/background/background.html", "components/background/background.css");















