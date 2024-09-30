const pokemonId = "6"
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

async function fetchPokemon() {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Erro ao buscar Pokémon: ${response.status} ${response.statusText}`);
        }
        
        const pokemon = await response.json();
        createPokemonCard(pokemon);
    } catch (error) {
        console.error(error);
        alert('Erro ao carregar Pokémon. Tente novamente mais tarde.');
    }
}

function createPokemonCard(pokemon) {
    const pokemonCards = document.getElementById('pokemon-cards');

    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('h2');
    name.textContent = capitalizeFirstLetter(pokemon.name);
    name.classList.add('card-title');

    const frame = document.createElement('div');
    frame.classList.add('frame-image');

    const image = document.createElement('img');
    image.classList.add('card-image');
    image.src = pokemon.sprites.other['official-artwork'].front_default;
    image.alt = pokemon.name;

    card.appendChild(name);
    card.appendChild(frame);
    frame.appendChild(image);
    pokemonCards.appendChild(card);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

fetchPokemon();
