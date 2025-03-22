
async function fetchPokemon(pokemonName) {
    try {
        let pokemonData = "";
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (response.status == 404) {
            pokemonData = "Not found";
        }
        else {
            pokemonData = await response.json();
        }
        return pokemonData
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

async function getPokemonDetails() {

    const pokemonName = document.getElementById("pname").value;
    const response = await fetchPokemon(pokemonName);
    const pokemonInfoElement = document.getElementById('poke-info');
    if (response == "Not found") {
        pokemonInfoElement.innerHTML = "<br><h2>The pokemon not Found</h2>";

    }
    else {
        pokemonInfoElement.innerHTML =
            `<h2>${response.name}</h2>
    <img src="${response.sprites.front_default}" alt="${response.name}">
    <h3>Thank you!</h3>`;
    }

}