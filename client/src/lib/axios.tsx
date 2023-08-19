import axios from 'axios';

let productsApiUrl = import.meta.env.VITE_PRODUCTS_API_URL + "/public/index.php" + "/api";
const productsApi = axios.create({
    baseURL: productsApiUrl,
    headers: {
        'Content-type': 'application/json'
    }
});

export default productsApi;