import { indexPage } from "./first.js";




const cover = document.createElement('div')
cover.classList.add('cover')
document.body.appendChild(cover)


setTimeout(() => {
    cover.style.opacity = 0;
    indexPage()

    // const content = document.getElementById('content')

    // const header = document.getElementsByTagName('header')
    // const body = document.querySelector('.body')
    // const background = document.querySelector('.background')

    const home = document.querySelector('.home')

    const menu = document.querySelector('.menu')

    const contact = document.querySelector('.contact')
    
    menu.addEventListener('click', () => {
        home.style.color = 'white'
        contact.style.color = 'white'
        menu.style.color = 'rgba(255, 77, 77, 0.744)'
    })

    home.addEventListener('click', () => {
        menu.style.color = 'white'
        contact.style.color = 'white'
        home.style.color = 'rgba(255, 77, 77, 0.744)'
    })

    contact.addEventListener('click', () => {
        menu.style.color = 'white'
        home.style.color = 'white'
        contact.style.color = 'rgba(255, 77, 77, 0.744)'
    })

    setTimeout(() => {
        cover.style.display = 'none'
    }, 750)
}, 100);





