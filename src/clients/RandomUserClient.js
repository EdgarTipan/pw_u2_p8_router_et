import axios from "axios";

const consultarUsuarioAleatorio = async () => {
    const response = await axios.get('https://randomuser.me/api/');
    return response.data;
};

// Facade function
export const consultarUsuarioAleatorioFachada = async () => {
    return await consultarUsuarioAleatorio();
};