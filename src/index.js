import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js'

window.addEventListener("load", function() {
    console.log("page loaded js working!");
    document.getElementById("conversion").addEventListener("submit", handleFormSubmission)
});


function getCurrency(usdAmount) {
    CurrencyExchange.getConversion().then((response) => {
        if (!response.ok) {
            printError(response);
        } else {
           printElements(response.json());
        }
    })
}

function printElements(response) {
    document.querySelector("result").innerText = null;
    const selectedCurrency = document.querySelectorAll("input[name='curr']:checked");
    const resultBox = document.getElementById("resultBox");
    resultBox.classList.remove("hidden");
    document.querySelector("result").innerText = `Your result is: ${response.conversion_rates[selectedCurrency]}`
}

function printError(response) {
    console.log("Error",response);
    document.querySelector("result").innerText = `There was an error processing your data:`

}


function handleFormSubmission(e) {
    e.preventDefault();
    const usdAmount = document.getElementById('usdInput').value;
    getCurrency(usdAmount);
    }


