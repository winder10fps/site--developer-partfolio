const burgerButton = document.querySelector('.burger-wrapper');
const navbarList = document.querySelector('.navbar__nav-list');
const overlay = document.querySelector('.overlay');
const navLink = document.querySelectorAll('.navbar__nav-link');
const bodyElement = document.querySelector('body');


const toggleClasses = () => {
    navbarList.classList.toggle('active');
    overlay.classList.toggle('active');
    bodyElement.classList.toggle('no-scroll');
}

burgerButton.addEventListener('click', () => {
    toggleClasses();
})

overlay.addEventListener('click', () => {
    toggleClasses();

})

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        toggleClasses();
    })
})
