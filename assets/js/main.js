var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');

function toggleMenu(){
  $menu.classList.toggle('active');
};

$burguerButton.addEventListener('click', toggleMenu);
