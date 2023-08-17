import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js'

window.addEventListener("load", function() {
    document.getElementById("conversion").addEventListener("submit", handleFormSubmission)
});


function getCurrency(usdAmount) {
    CurrencyExchange.getCurrency(usdAmount).then((response) => {
        if (!response.ok) {
            printError(response);
        } else {
           printElements(response.json());
        }
    })
}

function printElements(response) {
    document.querySelector("result").innerText = null;
    const resultBox = document.getElementById("resultBox");
    resultBox.classList.remove("hidden");
    document.querySelector("result").innerText = `Your result is: ${response.conversion_result}`
}

function printError(error) {
    document.querySelector("result").innerText = `There was an error processing your data: ${error}`
}

function handleFormSubmission(e) {
    e.preventDefault();
    const usdAmount = document.getElementById('usdInput').value;
    const targetCode = document.querySelectorAll("input[name='curr']:checked");
    // document.getElementById("usdInput").value = null;
    getCurrency(usdAmount, targetCode);
    }


