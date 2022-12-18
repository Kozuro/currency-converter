let sumElement = document.querySelector(".js-sum");
let exchangeElement = document.querySelector(".js-exchange");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let sum = sumElement.value;
    let exchange = exchangeElement.value;

    let result = sum / exchange;

    resultElement.innerText = result.toFixed(2);
});