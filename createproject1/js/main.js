import { pokemons, bosses } from "./pokemon";

let again = true;
let game = true;
let random0 = null;
let ans = null;
let itemBox = [];
let pokemonslist = [];
let used = [];
let value = 0;
let i = 0;

function subtraction(num1, num2) {
  ans = num1 - num2;
  // console.log("this is", ans);
  // console.log("What is", num1, " - ", num2);
  document.querySelector(".bar").insertAdjacentHTML(
    "afterbegin",
    `
    <h2 class = "question" >What is ${num1} - ${num2}:</h2>
    `
  );
}

function addition(num1, num2) {
  ans = num1 + num2;
  // console.log("this is", ans);
  // console.log("What is", num1, " + ", num2);
  document.querySelector(".bar").insertAdjacentHTML(
    "afterbegin",
    `
      <h2 class = "question" >What is ${num1} + ${num2}:</h2>
      `
  );
}

function deleted(bye) {
  document.querySelectorAll(bye).forEach((item) => itemBox.push(item));
  // console.log(itemBox);
  itemBox.forEach((item) => item.remove());
  itemBox = [];
}

function monsters() {
  document.querySelector(".btn").addEventListener("click", function () {
    if (parseInt(document.querySelector(".input").value) === ans) {
      game = true;
      value++;
      console.log(value);
    }
    if (game && value <= 10) {
      pikmin();
      again = true;
      used.push(pokemons[random0].name);
      console.log(used);
      // console.log("this is", random1);
      deleted(".imgs");
      deleted(".question");
      document
        .querySelector("#box2")
        .insertAdjacentHTML(
          "afterbegin",
          `<img class= "imgs" src=${pokemons[random0].url} alt=${pokemons[random0].name}>`
        );
      problems();
      game = false;
    } else if (game && value > 10) {
      boss();
    }
    document.querySelector(".input").value = "";
    console.log("this value is", document.querySelector(".input").value);
  });
}

function boss() {
  if (parseInt(document.querySelector(".input").value) === ans && value > 11) {
    game = true;
    i++;
    console.log("this is i", i);
    if (i > bosses.length - 1) {
      game = false;
      console.log("end");
      deleted(".imgs");
      deleted(".question");
      document
        .querySelector("#box2")
        .insertAdjacentHTML("afterbegin", `<img src="img/win2.webp" alt="">`);
    }
  }
  //create list that has the previous monsters so that no previous ones are spawned. use while loop?
  if (game) {
    deleted(".imgs");
    deleted(".question");
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
  // document.querySelector(".btn").addEventListener("click", function () {
  // });
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
  // console.log(random1);
  // console.log(random2);
}
console.log(used.length);
function pikmin() {
  if (used.length > 0) {
    while (again) {
      const ran = Math.floor(Math.random() * pokemons.length);
      used.forEach((cards) => {
        if (cards != pokemons[ran].name) {
          random0 = ran;
          again = false;
        }
      });
      console.log(pokemons[ran].name);
      console.log(random0);
    }
  } else {
    random0 = Math.floor(Math.random() * pokemons.length);
    console.log("bob");
  }
}

function pikmin2() {
  if (used.length > 0) {
    while (cards != pokemons[ran].name) {
      const ran = Math.floor(Math.random() * pokemons.length);
      used.forEach((cards) => {
        if (cards != pokemons[ran].name) {
          again = false;
          random0 = ran;
        }
      });
      console.log(pokemons[ran].name);
    }
    console.log(random0);
  } else {
    random0 = Math.floor(Math.random() * pokemons.length);
    console.log("bob");
  }
}

let used2 = [];
function pikmin3() {
  for (let i = 0; i < pokemons.length; i++) {
    used2.push(pokemons[i].name);
  }
  console.log(used2);
}

function monsters2() {
  document.querySelector(".btn").addEventListener("click", function () {
    if (parseInt(document.querySelector(".input").value) === ans) {
      game = true;
      value++;
      console.log(value);
    }
    if (game && value <= 10) {
      // getrid of pokemon before calling
      const random1 = Math.floor(Math.random() * pokemonslist.length);
      pokemonslist.splice(random1, 1);
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
    } else if (game && value > 10) {
      boss();
    }
    document.querySelector(".input").value = "";
    console.log("this value is", document.querySelector(".input").value);
  });
}
