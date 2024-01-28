import { pokemons, bosses } from "./pokemon";

let game = true;
let ans = null;

function subtraction(num1, num2) {
  ans = num1 - num2;
  console.log("this is", ans);
  console.log("What is", num1, " - ", num2);
  document.querySelector(".bar").insertAdjacentHTML(
    "afterbegin",
    `
    <h2 class = "question" >What is ${num1} - ${num2}:</h2>
    `
  );
}

function addition(num1, num2) {
  ans = num1 + num2;
  console.log("this is", ans);
  console.log("What is", num1, " + ", num2);
  document.querySelector(".bar").insertAdjacentHTML(
    "afterbegin",
    `
      <h2 class = "question" >What is ${num1} + ${num2}:</h2>
      `
  );
}

let itemBox = [];
function deleted(bye) {
  document.querySelectorAll(bye).forEach((item) => itemBox.push(item));
  // console.log(itemBox);
  itemBox.forEach((item) => item.remove());
  itemBox = [];
}

document.querySelector(".btn").addEventListener("click", function () {
  if (document.querySelector(".input").value == ans) {
    game = true;
  }
  if (game) {
    const random1 = Math.floor(Math.random() * pokemons.length);
    console.log("this is", random1);
    deleted(".imgs");
    deleted(".question");
    document
      .querySelector("#box2")
      .insertAdjacentHTML(
        "afterbegin",
        `<img class= "imgs" src=${pokemons[random1].url} alt=${pokemons[random1].name}>`
      );
    problems();
    game = false;
  }
  document.querySelector(".input").value = "";
  console.log("this value is", document.querySelector(".input").value);
});

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
