const urlPokemon = id => `https://pokeapi.co/api/v2/pokemon/100`



fetch("https://pokeapi.co/api/v2/pokemon/1")



async function fetchPokemon() {

    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/1")
    console.log(pokemon);
    
    const response = await pokemon.json()
    console.log(response);

    // console.log(pokemon);
    // console.log(pokemon.name);
    // console.log(pokemon["sprites"]["other"]["official-artwork"]["front_default"]);

    createPokemonCard(response)
};

function createPokemonCard(pokemon) {
    const pokemonCards = document.getElementById('pokemon-cards');

    console.log(pokemon);
    console.log(pokemon.name);

    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('h2');
    name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    name.classList.add('card-title');

    const cardFrame = document.createElement('h2');
    cardFrame.classList.add('frame-image');

    const image = document.createElement('img');
    image.src = pokemon["sprites"]["other"]["official-artwork"]["front_default"];
    image.alt = pokemon.name;

    card.appendChild(image);
    card.appendChild(name);

    pokemonCards.appendChild(card);
}

fetchPokemon()

// pokemonPromises.push(fetch(getPokemonUrl(id)).then(response => response.json()))    

