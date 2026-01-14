const burgerButton = document.querySelector('.burger-wrapper')
const navbarList = document.querySelector('.navbar__nav-list')
const overlay = document.querySelector('.overlay')
const navLink = document.querySelectorAll('.navbar__nav-link')
const bodyElement = document.querySelector('body')

burgerButton.addEventListener('click', () => {
    navbarList.classList.toggle('active')
    overlay.classList.toggle('active')
    bodyElement.classList.toggle('no-scroll')
})

overlay.addEventListener('click', () => {
    navbarList.classList.toggle('active')
    overlay.classList.toggle('active')
    bodyElement.classList.toggle('no-scroll')

})

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        navbarList.classList.toggle('active')
        overlay.classList.toggle('active')
        bodyElement.classList.toggle('no-scroll')

    })
})
