const button = document.querySelector('.button-humburger');
const nav = document.querySelector('.navigation');
const navlist = document.querySelector('.nav-list');
const body = document.querySelector('body');
const titleSection = document.querySelector('.name_skills');

//Burger menu

button.addEventListener('click', () => {
    button.classList.toggle('is-active')
    nav.classList.toggle('overlist')
    navlist.classList.toggle('open')
    body.classList.toggle('overflow')
    titleSection.classList.toggle('overflow')
})

function closemenu (event) {
    if (event.target.classList.contains('header_link') || nav.classList.contains('overlist')){
    button.classList.remove('is-active')
    nav.classList.remove('overlist')
    navlist.classList.remove('open')
    body.classList.remove('overflow')
    titleSection.classList.remove('overflow')
    }
}

nav.addEventListener('click', closemenu)