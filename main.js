const menu = document.querySelector('.nav_menu ul');
const openNav = document.querySelector('#open-nav');
const closeNav = document.querySelector('#close-nav');

//open nav dropdown
const openNavBtn = () => {
  menu.style.display = "flex";
  openNav.style.display = 'none';
  closeNav.style.display = 'inline-block';
}

//close nav dropdown
const closeNavBtn = () => {
  menu.style.display = "none";
  openNav.style.display = 'inline-block';
  closeNav.style.display = 'none';
}

openNav.addEventListener('click', openNavBtn);
closeNav.addEventListener('click', closeNavBtn);