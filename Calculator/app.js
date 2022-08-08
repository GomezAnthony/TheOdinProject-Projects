const container = document.querySelector('.calculator-bottons-body');
const display = document.querySelector('.calculator-display');

let firstNumber = 0;
let secondNumber = 0;
let operator = ''

container.addEventListener('click', (e) => {
  firstNumber = e.target.textContent
  display.textContent += firstNumber
  console.log(operator, 'first')


  if (firstNumber == '+') {
    firstNumber.textContent = ''
    display.textContent = operator
    secondNumber = e.target.textContent
   

  }
  
})



let add = (firstNumber, secondNumber) => {
   return firstNumber + secondNumber
}
let subtract = () => {}
let divide = () => {}
let multiply = () => {}


// Need to create a function to be able to click the buttons
// Display the numbers on the screen, after being clicked.
// After the first number is enter along with the operation, stop and reset the button to get the next number
