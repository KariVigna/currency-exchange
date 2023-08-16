import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js'

window.addEventListener("load", function() {
    console.log("page loaded js working!");
});


function getCurrency(amt, selectedCurr) {
    CurrencyExchange.getConversion().then((res) => {
        if (res.result != "success") {
            printError(res);
        } else {
            printElements(res, amt, selectedCurr);
        }
    })
}

function printElements(res) {
    console.log("Success",[res, amt, selectedCurr])
}

function printError(res) {
    console.log("Error",res)
}


function handleFormSubmission(event) {
    event.preventDefault();
    const usdAmount = document.querySelector('#usdInput').value;
    const selectedCurrency = document.querySelectorAll("input[name='curr']:checked");
    // document.querySelector("result").innerText = ${response.conversion_rates[selectedCurrency]
    getCurrency()
}

window.addEventListener("load", function(){
    document.querySelector("#conversion").addEventListener("submit", handleFormSubmission)
})

