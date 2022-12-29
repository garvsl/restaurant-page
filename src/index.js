import { indexPage } from "./first.js";
import { menuPage } from "./second.js";
import { removal } from "./removeSecond.js";



const cover = document.createElement('div')
cover.classList.add('cover')
document.body.appendChild(cover)


setTimeout(() => {
    cover.style.opacity = 0;
    indexPage()


    const home = document.querySelector('.home')

    const menu = document.querySelector('.menu')

    const contact = document.querySelector('.contact')

    menu.addEventListener('click', () => {
                
        if(menu.style.color == 'white' || menu.style.color == ''){
            home.style.color = 'white'
            contact.style.color = 'white'
            menu.style.color = 'rgba(255, 77, 77, 0.744)'
            menuPage()
            
        }
    })

    home.addEventListener('click', () => {

        if(home.style.color == 'white'){
            if(menu.style.color != 'white' && menu.style.color != ''){
                removal()
            }
            menu.style.color = 'white'
            contact.style.color = 'white'
            home.style.color = 'rgba(255, 77, 77, 0.744)'
        }
    })

    contact.addEventListener('click', () => {
        if(contact.style.color == 'white' || contact.style.color == ''){
            if(menu.style.color != 'white' && menu.style.color != ''){
                removal()
            }
            menu.style.color = 'white'
            home.style.color = 'white'
            contact.style.color = 'rgba(255, 77, 77, 0.744)'
            
        }
    })

    setTimeout(() => {
        cover.style.display = 'none'
    }, 750)
}, 100);





