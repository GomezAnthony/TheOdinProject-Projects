const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionaresBtn = document.getElementById('show-millionares')
const sortBtn= document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
   const res = await fetch('https://randomuser.me/api/')
   const data = await res.json()

   const user = data.results[0]
   
   const newUser = {
      name: `${user.name.first} ${user.name.last}`,
      money: Math.floor(Math.random() * 10000000)
   };

   addData(newUser)
   
}

//Double everyones money
function doubeMoney() {
   data = data.map((user) => {
      return {
         ...user,
         money: user.money * 2
      }
   });
   updateDOM();
}

// Sort by richest
function sortByRichest() {
   data.sort((a, b) => b.money - a.money);
   updateDOM();
}
// Add new obj to data arr
function addData(obj) {
   data.push(obj)

   updateDOM();
}

// FIlter only millionares
function showMillionares() {
   data = data.filter(user => user.money > 10000000);

   updateDOM();
}

// Calculate Wealth
function calculateWealth() {
   const wealth = data.reduce((acc, user) => (acc += user.money), 0);

   const wealthEl = document.createElement('div');
   wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`
   main.appendChild(wealthEl)
}


// Update DOM
function updateDOM(providedData = data) {
   // Clear main div
   main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

   providedData.forEach(item => {
      const element = document.createElement('div');
      element.classList.add('person');
      element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
      main.appendChild(element)
   });
}  

// Format number as money
function formatMoney(number) {
   return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 

}

//Even Listiners
addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubeMoney)
sortBtn.addEventListener('click', sortByRichest)
showMillionaresBtn.addEventListener('click', showMillionares)
calculateWealthBtn.addEventListener('click', calculateWealth)




