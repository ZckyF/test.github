const menuToogle = document.querySelector('.menu .menu-toogle');
const menuList = document.querySelector('.menu-list');

menuToogle.addEventListener('click', () => {
 menuToogle.classList.toggle('active');
 menuList.classList.toggle('active');
})

document.addEventListener('.menu-list li a').forEach(n =>n.addEventListener ('click', () => {
 menuToogle.classList.remove('active');
 menuList.classList.remove('active');
}) );


