
const icon = document.querySelector('.icon')
icon.addEventListener('click', event => {
    dropDown()
})

const links = document.querySelector('.dropdown-menu')


function dropDown() {
    links.classList.toggle('dropdown-menu')
}