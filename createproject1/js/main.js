import { pokemons, bosses } from "./pokemon";

function subtraction(num1, num2) {
  let ans = num1 - num2;
  console.log(ans);
  console.log("What is", num1, " - ", num2);
  document.querySelector(".bar").insertAdjacentHTML(
    "afterbegin",
    `
  <h2>What is ${num1} - ${num2}</h2>
  `
  );
}

function addition(num1, num2) {
  let ans = num1 + num2;
  console.log(ans);
  console.log("What is", num1, " + ", num2);
  document.querySelector(".bar").insertAdjacentHTML(
    "afterbegin",
    `
  <h2>What is ${num1} + ${num2}</h2>
  `
  );
}

// pokemons.forEach((call) =>
//   document.querySelector("#box2").insertAdjacentHTML(
//     "afterbegin",
//     `
// <img src=${call.url} alt=${call.name}>
// `
//   )
// );
document
  .querySelector("#box2")
  .insertAdjacentHTML(
    "afterbegin",
    `<img src=${pokemons[1].url} alt=${pokemons[1].name}>`
  );

function problems() {
  const random1 = Math.floor(Math.random() * 11);
  const random2 = Math.floor(Math.random() * 11);
  const random3 = Math.floor(Math.random() * 2);
  if (random3 === 1) {
    let num1 = null;
    let num2 = null;
    if (random1 >= random2) {
      num1 = random1;
      num2 = random2;
    } else {
      num1 = random2;
      num2 = random1;
    }
    subtraction(num1, num2);
    console.log("subraction");
  } else {
    addition(random1, random2);
    console.log("addition");
  }
  console.log(random1);
  console.log(random2);
}

problems();
