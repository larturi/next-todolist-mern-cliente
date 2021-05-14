import axios from 'axios';

console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

const clienteAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
});

export default clienteAxios;