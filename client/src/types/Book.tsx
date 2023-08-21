import Product from "./Product";

class Book extends Product {
    
    weight: string;

    // get weight(){
    //     return this._weight+"KG";
    // }

    constructor (sku: string, name: string, price:string, weight: string) {
        super(sku, name, price);
        this.weight = weight;
    }
}

export default Book;