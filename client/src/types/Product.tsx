abstract class Product {
    sku: string;
    name: string;
    price: string;

    // get sku() {
    //     return this._sku;
    // }    

    // get name() {
    //     return this._name;
    // }

    // get price() {
    //     return this._price + " $";
    // }

    additionalProperties: string | null = null;

    constructor(sku: string, name: string, price:string) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
} 

export default Product;