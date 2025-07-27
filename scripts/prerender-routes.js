
const TOTAL_POKEMONS = 151;
const TOTAL_PAGES = 5;

(async () => {

  const fs = require('fs');

  //crear los pokemons por IDs
  const pokemonsIds = Array.from({ length: TOTAL_POKEMONS }, (_, i) => i + 1);
  let fileContent = pokemonsIds.map(
    id => `/pokemons/${id}`
  ).join('\n');


  //Paginas Pokemon
  for (let index = 1; index <= TOTAL_PAGES; index++) {
    fileContent += `\n/pokemons/page/${index}`

  }

  //Rutas por nombres
  const pokemonNameList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`)
    .then(res => res.json());

  fileContent += '\n';
  fileContent += pokemonNameList.results.map(
    pokemon => `/pokemons/${pokemon.name}`
  ).join('\n')


  fs.writeFileSync('routes.txt', fileContent);

  console.log('Route.txt generated')

})();
