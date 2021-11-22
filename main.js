
const hamburgerIcon = document.querySelector('.fa-bars');

hamburgerIcon.addEventListener('click', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.classList.add('active');
})

const hamburgerIconClose = document.querySelector('.close');

hamburgerIconClose.addEventListener('click',function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.classList.remove('active');
})

