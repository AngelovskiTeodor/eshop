abstract class Product {
    _sku: string;
    _name: string;
    _price: string;

    get sku() {
        return this._sku;
    }    

    get name() {
        return this._name;
    }

    get price() {
        return this._price + " $";
    }

    additionalProperties: string | null = null;

    constructor(sku: string, name: string, price:string) {
        this._sku = sku;
        this._name = name;
        this._price = price;
    }
} 

export default Product;