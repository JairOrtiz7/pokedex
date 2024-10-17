const URL = "https://pokeapi.co/api/v2/pokemon/";

/*Buscar pokemon por input*/
const buscarInput = document.getElementById("buscar");
const contenedorPersonajes = document.getElementById("pokedex");
const contenedorTipos = document.getElementById("tipos-pk");

async function buscarPokemon() {
    const encontradoPokemon = buscarInput.value.toLocaleLowerCase();
    
    try {
        const response = await fetch(URL + encontradoPokemon);
        const data = await response.json();

        contenedorPersonajes.innerHTML = 
        `
            <img widht="200px" height="200px" src="${data.sprites.front_default}">
            <h2>${data.name.toUpperCase()}</h2>
            <p>Número: ${data.id}</p>
            <p>Altura: ${data.height / 10} m.</p>
            <p>Peso: ${data.weight /10} kg.</p>
        `;
        let tip = "";
        data.types.forEach(tipo => {
            tip = tip + `
                <h2>Tipo: </h2>
                <p>${tipo.type.name}</p>
            `;
        });
        contenedorTipos.innerHTML = tip; 
    } catch (error) {
        console.error(error);
    }
}
/*Boton búsqueda*/
document.getElementById("personajes-boton").addEventListener("click", buscarPokemon);