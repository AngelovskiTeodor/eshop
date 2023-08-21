import Product from "./Product";

class DVD extends Product {
    
    size: string;

    // get size() {
    //     return this._size+" MB";
    // }

    constructor (sku: string, name: string, price:string, size: string) {
        super(sku, name, price);
        this.size = size;
    }
}

export default DVD;