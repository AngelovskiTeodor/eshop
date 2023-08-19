import Product from "./Product";

class Furniture extends Product {
    height: string;
    width: string;
    length: string;

    constructor (sku: string, name: string, price:string, height: string, width: string, length: string) {
        super(sku, name, price);
        this.height = height;
        this.width = width;
        this.length = length;
    }
}

export default Furniture;