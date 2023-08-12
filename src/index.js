import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

window.addEventListener("load", function() {
    console.log("page loaded js working!");
});


const selectedCurrency = document.querySelectorAll("input[name='curr']:checked");
document.querySelector("result").innerText = ${response.conversion_rates.[selectedCurrency]}