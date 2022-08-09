// Simple Way
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
let showError = (input, message) => {
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message
}

// Show success outline
let showSuccess = (input) => {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}

// Check email is valid
let checkEmail = (input) => {
   const EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
   if (EMAIL_REGEXP.test(input.value.trim())) {
      showSuccess(input)
   } else {
      showError(input, 'Email is not valid')
   }
}

// Check required fields
let checkRequired = (inputArr) => {
   inputArr.forEach((input) => {
      if(input.value.trim() === '') {
         showError(input, `${getFieldName(input)} is required`)
      } else {
         showSuccess(input)
      }
   });
}

// Check input length
let checkLength = (input, min, max) => {
   if(input.value.length < min) {
      showError(input, `${getFieldName(input)} must be at least ${min} characters`)
   } else if (input.value.length > max) {
      showError(input, `${getFieldName(input)} must be less than ${max} characters`)
   } else {
      showSuccess(input)
   }
}

// Check password match
let checkPasswordMatch = (input1, input2) => {
   if (input1.value !== input2.value) {
      showError(input2, 'Passwords do not match')
   } 
}

// Get fieldname 
let getFieldName = (input) => {
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listiners
form.addEventListener('submit', (e) => {
   e.preventDefault();

   checkRequired([username, email, password, password2]);
   checkLength(username, 3, 15);
   checkLength(password, 6, 25);
   checkEmail(email)
   checkPasswordMatch(password, password2)
})
