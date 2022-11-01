let input = document.querySelector('.input')
email = document.querySelector('.email'),
   password = document.querySelector('.password'),
   gender = document.querySelector('.gender'),
   lastName = document.querySelector('.lastName'),
   number = document.querySelector('.number'),
   confirmPassword = document.querySelector('.confirmPassword');

input.addEventListener('blur', (event) => {
   if (event.target.value.trim().length == 0) {
      event.target.style.border = '2px solid red';
      event.target.setAttribute('placeholder', 'Pleace fill input . . .')
   } else {
      event.target.style.border = '2px solid green';
      event.target.setAttribute('placeholder', 'Enter user name')

   }
})

email.addEventListener('blur', (event) => {
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

gender.addEventListener('blur', (event) => {
   if (event.target.value.trim().length == 0) {
      event.target.style.border = '2px solid red';
      event.target.setAttribute('placeholder', 'Pleace fill input . . .')
   } else {
      event.target.style.border = '2px solid green';
      event.target.setAttribute('placeholder', 'Enter user name')

   }
})

lastName.addEventListener('blur', (event) => {
   if (event.target.value.trim().length == 0) {
      event.target.style.border = '2px solid red';
      event.target.setAttribute('placeholder', 'Pleace fill input . . .')
   } else {
      event.target.style.border = '2px solid green';
      event.target.setAttribute('placeholder', 'Enter user name')

   }
})

number.addEventListener('blur', (event) => {
   if (event.target.value.trim().length == 0) {
      event.target.style.border = '2px solid red';
      event.target.setAttribute('placeholder', 'Pleace fill input . . .')
   } else {
      event.target.style.border = '2px solid green';
      event.target.setAttribute('placeholder', 'Enter user name')

   }
})

confirmPassword.addEventListener('blur', (event) => {
   if (event.target.value.trim().length == 0) {
      event.target.style.border = '2px solid red';
      event.target.setAttribute('placeholder', 'Pleace fill input . . .')
   } else {
      event.target.style.border = '2px solid green';
      event.target.setAttribute('placeholder', 'Enter user name')

   }
})