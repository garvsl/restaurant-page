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

    
    

    //Body

    const bod = document.createElement('div')
    bod.classList.add('body')
    content.appendChild(bod)

    const background = document.createElement('img')
    background.classList.add('background')
    background.src = logo
    content.appendChild(background)
}

