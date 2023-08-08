import axios from 'axios';

let productsApiUrl = process.env.PRODUCTS_API_URL + "/api";
const productsApi = axios.create({
    baseURL: productsApiUrl,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
    }
});

export default productsApi;