// creo variabile e seleziono icona hamburger 
const hamburgerIcon = document.querySelector('.fa-bars');
// aggiungo evento all'icona hamburger quando l'utente clicca su di essa 
hamburgerIcon.addEventListener('click', function () {
    // creo variabile e seleziono la classe hamburger-menu con la lista
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    // aggiungo a tale classe un ulteriore classe .active per mostrare il menu a tendina
    hamburgerMenu.classList.add('active');
})
// creo variabile e seleziono icona close
const hamburgerIconClose = document.querySelector('.close');
// aggiungo evento all'icona close quando l'utente clicca su di essa 
hamburgerIconClose.addEventListener('click',function() {
    // creo variabile e seleziono la classe hamburger-menu con la lista
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    // aggiungo a tale classe un ulteriore classe .close per nascondere il menu a tendina quando clicco sull'icona
    hamburgerMenu.classList.remove('active');
})

