import axios from 'axios';

let products_api_url = process.env.PRODUCTS_API_URL + "/api";
const products_api = axios.create({
    baseURL: products_api_url,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
    }
});

export default products_api;