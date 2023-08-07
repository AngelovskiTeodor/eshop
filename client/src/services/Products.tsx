import products_api from "../lib/axios";
import IProductApiData from "../types/IProductApiData";

class ProductsService {
    getAllProducts() {
        return products_api.get<Array<IProductApiData>>("");
    }

    getProduct(sku: string){
        return products_api.get<IProductApiData>(`?sku=${sku}`);
    }

    createProduct(product: IProductApiData){
        return products_api.post("", product);
    }

    updateProduct(product: IProductApiData){
        return products_api.put("", product);
    }

    deleteProduct(sku: string){
        return products_api.delete(`?sku=${sku}`);
    }

    deleteProducts(sku_list: Array<string>){
        return products_api.patch("", sku_list);
    }
}

export default new ProductsService();