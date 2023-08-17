import axios from 'axios';

let productsApiUrl = import.meta.env.VITE_PRODUCTS_API_URL + "/api";
const productsApi = axios.create({
    baseURL: productsApiUrl,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
    }
});

export default productsApi;