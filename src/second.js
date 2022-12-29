import "./style.css"
import { indexPage } from "./first.js";
import bigmac from './bigmac.png'
import cheeseburger from './cheeseburger.png'
import chickensandwich from './chickensandwich.png'
import fileto from './fileto.png'
import grilled from './Grilled.png'
import mcrib from './mcrib.png'
import mcwrap from './mcwrap.png'
import onion from './onion.png'
import poutine from './poutine.png'


export function menuPage() {

    const content = document.getElementById('content')
    // const header = document.getElementsByTagName('header')
    // header[0].remove()

    const titl = document.createElement('a')
    titl.classList.add('titl')
    titl.href = '#'

    const title = document.createElement('h2')
    title.classList.add('title')
    title.textContent = 'Menu'


    content.appendChild(titl)
    titl.appendChild(title)

    setTimeout(() => {
        title.style.opacity = '1'
    }, 250);

    const boardcover = document.createElement('div')
    boardcover.classList.add('boardcover')
    content.appendChild(boardcover)

    const board = document.createElement('div')
    board.classList.add('board')
    boardcover.appendChild(board)   

    itemFactory('Big Mac', bigmac, '$4.65')
    itemFactory('Chicken Sandwich', chickensandwich, '$5.81')
    itemFactory('Cheeseburger', cheeseburger, '$2.79')
    itemFactory('Fileto Fish', fileto, '$3.00')
    itemFactory('McRib', mcrib, '$4.29')
    itemFactory('McWrap', mcwrap, '$2.99')
    itemFactory('Grilled Chicken', grilled, '$4.99')
    itemFactory('Onion Cheddar', onion, '$1.00')
    itemFactory('Poutine', poutine, '$2.06')

    setTimeout(() => {
        title.style.opacity = '1'
        boardcover.style.opacity = '1'
    }, 500);

    
}

function itemFactory(text, source, anothText){
    const funcBoard = document.querySelector('.board')

    const item = document.createElement('div')
    item.classList.add('item')

    const name = document.createElement('h4')
    name.classList.add('name')
    name.textContent = text

    const image = document.createElement('img')
    image.src = source
    
    const price = document.createElement('h4')
    price.classList.add('price')
    price.textContent = anothText

    funcBoard.appendChild(item) 
    item.appendChild(name)
    item.appendChild(image)
    item.appendChild(price)

    
}