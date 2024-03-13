var menuButton = document.getElementById('menu-button');
var closeButton = document.querySelector('.btn-close');
var mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', function () {
    mobileMenu.style.display = 'block';
    menuButton.style.display = 'none';
    closeButton.style.display = 'block';
});

closeButton.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
    menuButton.style.display = 'block';
    closeButton.style.display = 'none';
})