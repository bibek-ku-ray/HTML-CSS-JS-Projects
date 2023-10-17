const seach = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    seach.classList.toggle('active')
    input.focus()
})