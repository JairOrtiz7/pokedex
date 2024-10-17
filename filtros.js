const botonTipos = document.querySelectorAll(".botonHeader");
const listaPokemons = document.querySelector("#pokemons-card");
let URL = "https://pokeapi.co/api/v2/pokemon/";



for (let i = 1; i <= 400; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
    ;
}

function mostrarPokemon(data) {
    let habilidades = data.abilities.map(abilities => `<p class="div-hb">${abilities.ability.name}</p>`);
    habilidades = habilidades.join("");

    const div = document.createElement("div");
    div.classList.add("pokemon-pj");
    div.innerHTML = `
        <div class="flex-img">
            <img class="div-img" src="${data.sprites.front_default}" alt="${data.name}">
        </div>
        <p class="div-nolista">ID: ${data.id}</p>
        <h2 class="div-titulo">${data.name}</h2>
        <p class="div-habilidades">Habilidades: </p>
        <div>
            ${habilidades}
        </div> 
    `;
    listaPokemons.append(div);
}

botonTipos.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;
    listaPokemons.innerHTML = "";

    for (let i = 1; i <= 400; i++) {
        fetch(URL + i)
            .then((response) => response.json())
            .then(data => {

                const tipos = data.types.map(type => type.type.name);
                if (tipos.some(tipo => tipo.includes(botonId))) {
                    mostrarPokemon(data);
                }
        });
    }
}))