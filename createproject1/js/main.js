const url1 = "https://pokeapi.co/api/v2/pokemon/2";

async function getData(URl) {
  const response = await fetch(URl);
  const data = await response.json();
  console.log(data.name);
}
// getData(url1);
// put in async function
let x = 0;
function call() {
  while (x != 5) {
    x = Math.floor(Math.random() * 6);
    console.log(x);
  }
}
//   getData(`https://pokeapi.co/api/v2/pokemon/${x + 1}`);

function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ow");
    }, 2000);
  });
}

function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Other things to do before completion of the promise
      console.log("Did something");
      // The fulfillment value of the promise
      resolve("https://example.com/");
    }, 2000);
  });
}

doSomething();
