abstract class Product {
    sku: string;
    name: string;
    price: string;
    selected: boolean;

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
        const floated_price = parseFloat(price);
        if (Number.isNaN(floated_price)) {
            throw new TypeError("Invalid Price");
        }
        this.price = floated_price.toFixed(2) + " $";
        this.selected = false;
    }
} 

export default Product;