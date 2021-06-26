
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

/* --------- RESPONSAVEL PELO "CAROSEL (SLIDER)" NO TESTEMONIALS ----------*/ 
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* --------- {** ScrollReveal **}RESPONSAVEL POR MOSTRAR ELEMENTOS USANDO O SCROLL----------*/ 
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* ---------"ARROW" button ↑ RETURN TO TOP----------*/

// button ↑ RETURN TO TOP 
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// When Scroll 
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
