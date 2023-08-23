import productsApi from "../lib/axios";
import IProductApiData from "../types/IProductApiData";

class ProductsService {
    getAllProducts() {
        return productsApi.get<Array<IProductApiData>>("");
    }

    getProduct(sku: string){
        return productsApi.get<IProductApiData>(`?sku=${sku}`);
    }

    async createProduct(product: IProductApiData){
        return productsApi.postForm<any>("", product).then((res) => {console.log("response is"); console.log(res)});
    }

    updateProduct(product: IProductApiData){
        return productsApi.put("", product);
    }

    deleteProduct(sku: string){
        return productsApi.delete(`?sku=${sku}`);
    }

    deleteProducts(sku_list: Array<string>){
        return productsApi.patch("", sku_list);
    }
}

export default new ProductsService();