const endpoint = "https://api.exchangerate-api.com/v4/latest/";

// Create variables for each DOM element to target
const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");
const swap = document.getElementById("swap");
const rate = document.getElementById("rate");


// Add functions for the event handlers
function calculate() {
	let currency_one = currencyEl_one.value;
    let currency_two = currencyEl_two.value;
    
    fetch(`${endpoint}${currency_one}`)
        .then(res => res.json())
        .then(data => {
            let currencyTwoRate = data.rates[currency_two]
            
            rate.innerText = `1 ${currency_one} = ${currencyTwoRate} ${currency_two}`

            amountEl_two.value = (amountEl_one.value * currencyTwoRate).toFixed(2);
        })

}

function swapCurrencies() {
    let temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate()
}

// Add event handlers
currencyEl_one.addEventListener("change", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
amountEl_two.addEventListener("input", calculate)
swap.addEventListener("click", swapCurrencies);

