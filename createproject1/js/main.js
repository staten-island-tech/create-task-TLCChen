import { pokemons, bosses } from "./pokemon";

pokemons.forEach((call) =>
  document.querySelector("#box2").insertAdjacentHTML(
    "afterbegin",
    `
<img src=${call.url} alt=${call.name}>
`
  )
);
