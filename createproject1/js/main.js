const url1 = "https://pokeapi.co/api/v2/pokemon/2";

async function getData(URl) {
  const response = await fetch(URl);
  const data = await response.json();
  console.log(data.name);
}
// getData(url1);
// put in async function
let x = 0;
while (x != 9) {
  x = Math.floor(Math.random() * 11);
  console.log(x);
  setTimeout(() => {
    console.log("we waited 100 ms to run this code, oh boy wowwoowee!");
  }, 100);
  //   getData(`https://pokeapi.co/api/v2/pokemon/${x + 1}`);
}
