import { pokemons, bosses } from "./pokemon";

let game = true;
let changing = true;
let ans = null;
let inputAnswer = null;
let itemBox = [];
let used = [];
let value = 0;
let i = 0;
const length = pokemons.length - 7;

function subtraction(num1, num2) {
  ans = num1 - num2;
  document.querySelector(".bar").insertAdjacentHTML(
    "afterbegin",
    `
    <h2 class = "question" >What is ${num1} - ${num2}:</h2>
    `
  );
}

function addition(num1, num2) {
  ans = num1 + num2;
  document.querySelector(".bar").insertAdjacentHTML(
    "afterbegin",
    `
      <h2 class = "question" >What is ${num1} + ${num2}:</h2>
      `
  );
}

function anser() {
  inputAnswer = parseInt(document.querySelector(".input").value);
  return inputAnswer;
}

function boss(answer, img, question) {
  if (answer === ans && value > length) {
    game = true;
    i++;
    console.log("this is i", i);
    if (i > bosses.length - 1) {
      game = false;
      changing = true;
      console.log("end");
      document.querySelectorAll(img).forEach((item) => itemBox.push(item));
      for (let i = 0; i < itemBox.length; i++) {
        itemBox[i].remove();
      }
      itemBox = [];
      document.querySelectorAll(question).forEach((item) => itemBox.push(item));
      for (let i = 0; i < itemBox.length; i++) {
        itemBox[i].remove();
      }
      itemBox = [];
      document
        .querySelector("#box2")
        .insertAdjacentHTML("afterbegin", `<img src="img/win2.webp" alt="">`);
    }
  }
  if (game) {
    document.querySelectorAll(img).forEach((item) => itemBox.push(item));
    for (let i = 0; i < itemBox.length; i++) {
      itemBox[i].remove();
    }
    itemBox = [];
    document.querySelectorAll(question).forEach((item) => itemBox.push(item));
    for (let i = 0; i < itemBox.length; i++) {
      itemBox[i].remove();
    }
    itemBox = [];
    document
      .querySelector("#box2")
      .insertAdjacentHTML(
        "afterbegin",
        `<img class= "imgs" src=${bosses[i].url} alt=${bosses[i].name}>`
      );
    problems();
    game = false;
  }
  document.querySelector(".input").value = "";
  console.log("this value is", document.querySelector(".input").value);
}

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
}
console.log(used.length);

document.querySelector(".btn").addEventListener("click", function () {
  createMonsters2(anser(), ".imgs", ".question");
});

function createMonsters2(answer, img, question) {
  if (answer === ans) {
    game = true;
    value++;
    console.log(answer);
    document.querySelector(".input").placeholder = "Input Math Answer Here";
  } else if (answer != ans && changing === false) {
    document.querySelector(".input").placeholder = "Wrong Answer Try Again";
  }
  if (document.querySelector(".btn").innerHTML != "Press to Answer") {
    document.querySelector(".btn").innerHTML = "Press to Answer";
    document.querySelector(".intro").remove();
    document.querySelector(".center").insertAdjacentHTML(
      "beforeend",
      `
      <img src="img/pokeball.png" alt="">
      `
    );
    changing = false;
  }
  if (game && value <= length - 1) {
    const random1 = Math.floor(Math.random() * pokemons.length);
    document.querySelectorAll(img).forEach((item) => itemBox.push(item));
    for (let i = 0; i < itemBox.length; i++) {
      itemBox[i].remove();
    }
    itemBox = [];
    document.querySelectorAll(question).forEach((item) => itemBox.push(item));
    for (let i = 0; i < itemBox.length; i++) {
      itemBox[i].remove();
    }
    itemBox = [];
    document
      .querySelector("#box2")
      .insertAdjacentHTML(
        "afterbegin",
        `<img class= "imgs" src=${pokemons[random1].url} alt=${pokemons[random1].name}>`
      );
    console.log(pokemons[random1].name);
    pokemons.splice(random1, 1);
    problems();
    game = false;
  } else if (game && value > length - 1) {
    boss(answer, ".imgs", ".question");
  }
  document.querySelector(".input").value = "";
  console.log("this value is", document.querySelector(".input").value);
}
