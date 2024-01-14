const hamburgerMenu = document.querySelector('.hamburger-menu')
const primaryNavbar = document.querySelector('.primary-navbar')
const closeIcon = document.querySelector('.close-menu')
const openIcon = document.querySelector('.open-menu')
const overlay = document.querySelector('.overlay')
console.log(primaryNavbar);


hamburgerMenu.addEventListener('click', e => {
    // primaryNavbar.classList.toggle('mobile-hidden')
    primaryNavbar.classList.toggle('sidebar-active')
    openIcon.classList.toggle('hidden')
    closeIcon.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
})