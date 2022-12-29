export function removal(){
    const menu = document.querySelector('.titl')
    const boardcover = document.querySelector('.boardcover')
    menu.style.opacity = '0'
    boardcover.style.opacity = '0'
    setTimeout(() => {
        menu.remove()
        boardcover.remove()
    }, 500);
}