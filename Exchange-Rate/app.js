const currencyElement_one = document.getElementById('currency-one');
const currencyElement_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate')
const sawp = document.getElementById('swap')

// Fetch exchange rate and update the ROM
function calculate() {
   const currency_one = currencyElement_one.value;
   const currency_two = currencyElement_two.value;

   fetch(`https://v6.exchangerate-api.com/v6/8dd1e539480d60f377244fbb/latest/${currency_one}`)
   .then(res => res.json())
   .then(data => {
      const rate = data.conversion_rates[currency_two];


      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2)

   })
}

// Event Listiners
currencyElement_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyElement_two.addEventListener('change', calculate)
amountEl_two.addEventListener('inputf', calculate)

sawp.addEventListener('click', () => {
   const temp = currencyElement_one.value;
   currencyElement_one.value = currencyElement_two.value
   currencyElement_two = temp;
   calculate();
})


calculate()