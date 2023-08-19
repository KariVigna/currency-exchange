import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';

window.addEventListener("load", function() {
    document.getElementById("conversion").addEventListener("submit", handleFormSubmission);
    document.querySelector(".reload").addEventListener("click", refreshPage);

    function getCurrency(usdAmount, targetCode) {
        CurrencyExchange.getCurrency(usdAmount, targetCode).then((response) => {
            if (response.result === "success") {
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
        getCurrency(usdAmount, targetCode);
    }

    function printElements(response, usdAmount, targetCode) {
        const resultBox = document.getElementById("resultBox");
        resultBox.classList.remove("hidden");
        document.getElementById("result").innerText = `$${usdAmount} USD is equal to ${response.conversion_result.toFixed(2)} ${targetCode}`;
    }

    function printError(response) {
        const resultBox = document.getElementById("resultBox");
        resultBox.classList.remove("hidden");
        document.getElementById("result").innerText = `There was an error processing your data: ${response}`;
    }
    
    function refreshPage () {
        location.reload();
    }
});

