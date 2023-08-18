import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';

window.addEventListener("load", function() {
    document.getElementById("conversion").addEventListener("submit", handleFormSubmission);

function getCurrency(usdAmount, targetCode) {
    CurrencyExchange.getCurrency(usdAmount, targetCode).then((response) => {
        if (response.data === 200) {
            printElements(response, usdAmount, targetCode);
        } else {
           printError(response);
        }
    });
}
function handleFormSubmission(e) {
    e.preventDefault();
    const usdAmount = document.getElementById('usdInput').value;
    const targetCode = document.querySelector("input[name='curr']:checked").value;
    // document.getElementById("usdInput").value = null;
    getCurrency(usdAmount, targetCode);
    console.log("form submitted!");
    }

function printElements(response, usdAmount, targetCode) {
    // document.querySelector("result").innerText = null;
    const resultBox = document.getElementById("resultBox");
    resultBox.classList.remove("hidden");
    console.log("success");
    console.log(response, usdAmount, targetCode);
    document.getElementById("result").innerText = `Your result is: ${response.conversion_result}`;
}

function printError(error) {
    // document.querySelector("result").innerText = null;
    const resultBox = document.getElementById("resultBox");
    resultBox.classList.remove("hidden");
    console.log("error")
    console.log(response)
    document.getElementById("result").innerText = `There was an error processing your data: ${error}`;
}

});

