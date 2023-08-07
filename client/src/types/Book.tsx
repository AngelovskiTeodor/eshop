import Product from "./Product";

class Book extends Product {
    
    _weight: string;

    get weight(){
        return this._weight+"KG";
    }

    constructor (sku: string, name: string, price:string, weight: string) {
        super(sku, name, price);
        this._weight = weight;
    }

    additionalProperties(): string {
        return this.weight;
    }
}

export default Book;