
/* ---------ALTERNAR MENU AO CLICAR NO ICONE => hamburguer ( ≡ ) e X ----------*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* ---------OCULTA MENU AO CLICAR EM UM ITEN  ----------*/ 
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* --------- ALTERA O "HEADER" QUANDO USAR O SCROLL ----------*/ 
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
// scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
// menor que a altura do header
    header.classList.remove('scroll')
  }
})
