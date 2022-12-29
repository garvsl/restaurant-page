import "./style.css"
import logo from './mcdonalds.jpeg';

export function indexPage() {

    //Header

    const content = document.getElementById('content')

    const header = document.createElement('header')
    content.appendChild(header)

    const foodwrap = document.createElement('div')
    foodwrap.classList.add('foodwrap')
    header.appendChild(foodwrap)

    const food = document.createElement('h2')
    food.classList.add('food')
    food.textContent = "McDonald's"
    foodwrap.appendChild(food)

    const links = document.createElement('ul')
    links.classList.add('links')
    header.appendChild(links)
    
    const tabOne = document.createElement('li')
    const linkOne = document.createElement('a')
    linkOne.classList.add('home')
    linkOne.textContent = 'Home'
    // linkOne.href = '#'
    const tabTwo = document.createElement('li')
    const linkTwo = document.createElement('a')
    linkTwo.classList.add('menu')
    linkTwo.textContent = 'Menu'
    // linkTwo.href = '#'
    const tabThree = document.createElement('li')
    const linkThree = document.createElement('a')
    linkThree.classList.add('contact')
    // linkThree.href = '#'
    linkThree.textContent = 'Contact'

    tabOne.classList.add('tab')
    tabTwo.classList.add('tab')
    tabThree.classList.add('tab')
    

    links.appendChild(tabOne)
    tabOne.appendChild(linkOne)
    links.appendChild(tabTwo)
    tabTwo.appendChild(linkTwo)
    links.appendChild(tabThree)
    tabThree.appendChild(linkThree)

    linkOne.classList.add('current')

    const mobile = document.createElement('div')
    mobile.classList.add('mobile')
    header.appendChild(mobile)

    const pieceOne = document.createElement('div')
    pieceOne.classList.add('piece')
    mobile.appendChild(pieceOne)
    
    const pieceTwo = document.createElement('div')
    pieceTwo.classList.add('piece')
    mobile.appendChild(pieceTwo)

    const pieceThree = document.createElement('div')
    pieceThree.classList.add('piece')
    mobile.appendChild(pieceThree)

    function mobileEvent(){
        const smallMenu = document.createElement('div')
        smallMenu.classList.add('smallMenu')
        smallMenu.style.opacity = '1'

        
        header.appendChild(smallMenu)
        
        //animate it coming down
        
        setTimeout(() => {
            smallMenu.style.top = '70px'
            pieceOne.style.transformOrigin = 'center'
            pieceTwo.style.transformOrigin = 'center'
            pieceOne.style.transform = 'rotate(-45deg)'
            pieceTwo.style.transform = 'rotate(45deg)'
            pieceTwo.style.marginTop = '-10px'
            pieceThree.style.display = 'none'
        }, 250);

        smallMenu.appendChild(links)
        links.style.display = 'flex'
        setTimeout(() => {
            links.style.opacity = '1'
        }, 250);
        mobile.removeEventListener('click', mobileEvent)
        mobile.addEventListener('click', mobileRemove)

    }
    
    mobile.addEventListener('click',  mobileEvent)

    function mobileRemove(){
        const smallMenu = document.querySelector('.smallMenu')

        pieceOne.style.transform = 'rotate(0deg)'
        pieceTwo.style.transform = 'rotate(-0deg)'
        pieceTwo.style.marginTop = '0'
        pieceThree.style.display = 'block'

        smallMenu.style.top = '0'


        mobile.removeEventListener('click', mobileRemove)
        links.style.opacity = '0'
        setTimeout(() => {
            
            smallMenu.remove()
            
        }, 250);
        mobile.addEventListener('click',  mobileEvent)
    }

    





        

    

    //Body



    const background = document.createElement('img')
    background.classList.add('background')
    background.src = logo
    content.appendChild(background)
}

