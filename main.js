"use strict";
// Función para generar el número Random:
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log("Número random:", randomNumber);
//___________________________________________________________

// Comparaciones:
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const userNumber = document.querySelector(".js-input");
const background = document.querySelector(".js-page");

const compare = () => {
  const userNumber2 = userNumber.value;
  const userNumberValue = parseInt(userNumber2);
  console.log(`Número de la usuaria: ${userNumberValue}`);
  if (userNumberValue === randomNumber) {
    clue.innerHTML = "Has ganado campeona!!!";
    clue.style.color = "green";
    background.style.backgroundColor = "#e7ecf2";
  } else if (userNumber2 < 1 || userNumber2 > 100) {
    clue.innerHTML = `El número debe estar entre 1 y 100.`;
    clue.style.color = "#7e113d";
  } else if (userNumber2 < randomNumber) {
    clue.innerHTML = "Demasiado bajo";
    clue.style.color = "red";
  } else if (userNumber2 > randomNumber) {
    clue.innerHTML = "Demasiado alto";
    clue.style.color = "red";
  }
};
button.addEventListener("click", compare);
//___________________________________________________________

// Contador de intentos:
const userCounter = document.querySelector(".js-counter");
let counter = 0;
function countTries() {
  counter += 1;
  //console.log(`${counter}`);
  userCounter.innerHTML = `Número de intentos: ${counter}`;
}

button.addEventListener("click", countTries);
//___________________________________________________________
