import Product from "../types/Product";
import Book from "../types/Book";
import DVD from "../types/DVD";
import Furniture from "../types/Furniture";
import IProductApiData from "../types/IProductApiData";

function ProductFactory (props: IProductApiData): Product {
    if (props.weight) {
        let ret =  new Book(
            props.sku,
            props.name,
            props.price,
            props.weight
        );
        return ret;
    } else if (props.size) {
        let ret = new DVD(
            props.sku,
            props.name,
            props.price,
            props.size
        );
        return ret;
    } else if (props.height && props.width && props.length) {
        let ret = new Furniture(
            props.sku,
            props.name,
            props.price,
            props.height,
            props.width,
            props.length
        );
        return ret;
    } else {
        throw new TypeError("Unknown product type");
    }
}

export default ProductFactory;