const navbar = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const closeBtn = document.querySelector('#close-btn')
const sidebar = document.querySelector('#sidebar')
const date = document.querySelector('#date')

//smooth scroll to href links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})

// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar')
})
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})

// set year
date.innerHTML = new Date().getFullYear()
