import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

window.addEventListener("load", function() {
    console.log("page loaded js working!");
});

function handleFormSubmission(event) {
    event.preventDefault();
    const usdAmount = document.querySelector('#usdInput').value;
    const selectedCurrency = document.querySelectorAll("input[name='curr']:checked");
}
window.addEventListener("load", function(){
    document.querySelector("#conversion").addEventListener("submit", handleFormSubmission)
})

// document.querySelector("result").innerText = ${response.conversion_rates.[selectedCurrency]}