"use strict";

console.log("Working");

//Genera Random Number e imprime en la consola
const randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(randomNumber);

//_________________________

// Recogemos el input de la user y lo transformamos a número
const inputNumber = document.querySelector(".js-input");
const inputValue = parseInt(inputNumber.value);

//

//Contador----

const buttonSender = document.querySelector(".js-button");
const userCounter = document.querySelector(".js-counter");
let counter = 0;
function countTries() {
  counter += 1;
  //console.log(`${counter}`);
  userCounter.value = userCounter.innerHTML + counter;
}

buttonSender.addEventListener("click", countTries);
