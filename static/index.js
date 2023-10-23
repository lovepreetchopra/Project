burger = document.querySelector('.burger')
navbar = document.querySelector('#navbar')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', () => {
    navList.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
})

function myFunction() {
    alert("form has been submitted successfully ! ");
  }