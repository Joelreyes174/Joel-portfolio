document.addEventListener("DOMContentLoaded", function() {
  var nameCard = document.getElementById('name_card');
  
  var shadow = document.createElement('div');
  shadow.className = 'shadow';
  nameCard.appendChild(shadow);
  
  var gradient = document.createElement('div');
  gradient.style.position = 'absolute';
  gradient.style.top = '0';
  gradient.style.left = '0';
  gradient.style.width = '100%';
  gradient.style.height = '100%';
  gradient.style.background = 'linear-gradient(to bottom right, rgba(0, 146, 63, 0.5), rgba(255, 187, 0, 0.5), rgba(213, 44, 39, 0.5))';
  shadow.appendChild(gradient);
});

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