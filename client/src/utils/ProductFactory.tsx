import Product from "../types/Product";
import Book from "../types/Book";
import DVD from "../types/DVD";
import Furniture from "../types/Furniture";
import IProductApiData from "../types/IProductApiData";

const bookAdditionalProperties = (book: Book) => {
    return book.weight;
}

const dvdAdditionalProperties = (dvd: DVD) => {
    return dvd.size;
}

const furnitureAdditionalProperties = (furniture: Furniture) => {
    return furniture.height+"x"+furniture.width+"x"+furniture.length;
}

function ProductFactory (props: IProductApiData): Product {
    if (props.weight) {
        let ret =  new Book(
            props.sku,
            props.name,
            props.price,
            props.weight
        );
        ret.additionalProperties = bookAdditionalProperties(ret);
        return ret;
    } else if (props.size) {
        let ret = new DVD(
            props.sku,
            props.name,
            props.price,
            props.size
        );
        ret.additionalProperties = dvdAdditionalProperties(ret);
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
        ret.additionalProperties = furnitureAdditionalProperties(ret);
        return ret;
    } else {
        throw new TypeError("Unknown product type");
    }
}

export default ProductFactory;