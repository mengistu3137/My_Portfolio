const humburger=document.querySelector('#humburger')
const menu = document.querySelector('#menu')

const seng=document.querySelector('#seng')
humburger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    humburger.classList.toggle('bg-white')
    
})