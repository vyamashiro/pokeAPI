const urlPokemon = id => `https://pokeapi.co/api/v2/pokemon/100`

async function fetchPokemon() {

    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/151").then(response => {
        console.log("response", response);
        return response.json()
    })
    
    console.log(pokemon);
    console.log(pokemon.name);
    console.log(pokemon["sprites"]["other"]["official-artwork"]["front_default"]);
};

fetchPokemon()

// pokemonPromises.push(fetch(getPokemonUrl(id)).then(response => response.json()))    

