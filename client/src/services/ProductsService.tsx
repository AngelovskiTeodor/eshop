import productsApi from "../lib/axios";
import IProductApiData from "../types/IProductApiData";
import Product from "../types/Product";

class ProductsService {
    getAllProducts() {
        return productsApi.get<Array<IProductApiData>>("");
    }

    getProduct(sku: string){
        return productsApi.get<IProductApiData>(`?sku=${sku}`);
    }

    async createProduct(product: IProductApiData){
        return productsApi.postForm<any>("", product);
    }

    updateProduct(product: IProductApiData){
        return productsApi.put("", product);
    }

    async deleteProduct(sku: string){
        return await productsApi.delete(`?sku=${sku}`);
    }

    async deleteProducts(productsList: Array<Product>){
        const deleteRequests = productsList.map(async (product) => {
            if (product.selected) {
                await this.deleteProduct(product.sku);
            }
        });
        return await Promise.allSettled(deleteRequests);
    }
}

export default new ProductsService();