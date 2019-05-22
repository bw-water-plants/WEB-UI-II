
const icon = document.querySelector('.icon')
icon.addEventListener('click', event => {
    dropDown()
})

const links = document.querySelector('.dropdown')


function dropDown() {
    links.classList.toggle('dropdown')
}