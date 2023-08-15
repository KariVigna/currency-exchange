import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js'

window.addEventListener("load", function() {
    console.log("page loaded js working!");
});

function handleFormSubmission(event) {
    event.preventDefault();
    const usdAmount = document.querySelector('#usdInput').value;
    const selectedCurrency = document.querySelectorAll("input[name='curr']:checked");
    // document.querySelector("result").innerText = ${response.conversion_rates.[selectedCurrency]}
}
window.addEventListener("load", function(){
    document.querySelector("#conversion").addEventListener("submit", handleFormSubmission)
})

