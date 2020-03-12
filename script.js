const MENU_HEADER = document.getElementById('menu-header');

MENU_HEADER.addEventListener('click', (event) => {
MENU_HEADER.querySelectorAll('a').forEach(el => el.classList.remove('active'));
event.target.classList.add('active');
});