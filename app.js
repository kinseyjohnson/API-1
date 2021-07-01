//Fetch

for (let i = 1; i <=150; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
        .then(result => result.json())
        .then(json => {
            console.log(json);
            displayResults(json)
        });
}

//Display
function displayResults(json){
//     console.log(pokemon);
    let pokemon = json
    let pokemonContainer = document.getElementById('pokemonContainer')
    let pokemonCharacter = document.createElement("h2")
    let pokemonNumber = document.createElement("p")
    let pokemonImg = document.createElement("img")
    pokemonImg.src = pokemon.sprites.back_default
    pokemonCharacter.innerText = pokemon.name
    pokemonNumber.innerHTML = `${pokemon.id}`
    pokemonContainer.appendChild(pokemonCharacter);
    pokemonContainer.appendChild(pokemonImg);
    pokemonContainer.appendChild(pokemonNumber);
}

