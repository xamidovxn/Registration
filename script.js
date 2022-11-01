"use strict";

let userName = document.querySelector('#username'),
   password = document.querySelector('#password'),
   show = document.querySelector('.show'),
   eye = document.querySelector(".eye"),
   btn = document.querySelector('.btn');

userName.addEventListener('blur', (event) => {
   if (event.target.value.trim().length == 0) {
      event.target.style.border = '2px solid red';
      event.target.setAttribute('placeholder', 'Pleace fill input . . .')
   } else {
      event.target.style.border = '2px solid green';
      event.target.setAttribute('placeholder', 'Enter user name')

   }
})

password.addEventListener('blur', (event) => {
   if (event.target.value.trim().length == 0) {
      event.target.style.border = '2px solid red';
      event.target.setAttribute('placeholder', 'Pleace fill input . . .')
   } else {
      event.target.style.border = '2px solid green';
      event.target.setAttribute('placeholder', 'Enter user name')
   }
})

password.addEventListener('keyup', (event) => {
   if (event.target.value.trim().length == 0) {
      show.setAttribute('class', 'show bi bi-eye d-none')
   } else {
      show.setAttribute('class', 'show bi bi-eye d-block')
   }
})

show.addEventListener('click', (e) => {
   if (password.getAttribute('type') === 'password') {
      password.setAttribute('type', 'text')
      eye.style.display = 'block'
   } else {
      show.style.display = 'none'
   }
})

eye.addEventListener('click', (e) => {
   if (password.getAttribute('type') === 'text') {
      password.setAttribute('type', 'password')
      eye.style.display = 'none'
   }
})


