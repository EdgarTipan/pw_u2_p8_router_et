import axios from "axios"

const consumirPokemon = async (id) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(rpt => rpt.data);
    return respuesta;
}

//Funciones fachada
export const consumirPokemonFachada = async () => {
    return await consumirPokemon(id);
}