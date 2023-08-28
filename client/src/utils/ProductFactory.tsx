import Product from "../types/Product";
import Book from "../types/Book";
import DVD from "../types/DVD";
import Furniture from "../types/Furniture";
import IProductApiData from "../types/IProductApiData";

const bookAdditionalProperties = (book: Book) => {
    return "Weight: " + book.weight + "KG";
}

const dvdAdditionalProperties = (dvd: DVD) => {
    return "Size: " + dvd.size + " MB";
}

const furnitureAdditionalProperties = (furniture: Furniture) => {
    return "Dimension: "+furniture.height+"x"+furniture.width+"x"+furniture.length;
}

function ProductFactory (props: IProductApiData): Product {
    if (props.weight) {
        try {
            let ret =  new Book(
                props.sku ? props.sku : "",
                props.name ? props.name : "",
                props.price ? props.price : "",
                props.weight ? props.weight : ""
            );
            ret.additionalProperties = bookAdditionalProperties(ret);
            return ret;
        }
        catch (err: any) {
            throw new TypeError("Unable to create product from API data: "+err);
        }
    } else if (props.size) {
        try {
            let ret = new DVD(
                props.sku ? props.sku : "",
                props.name ? props.name : "",
                props.price ? props.price : "",
                props.size ? props.size : ""
            );
            ret.additionalProperties = dvdAdditionalProperties(ret);
            return ret;
        }
        catch (err: any) {
            throw new TypeError("Unable to create product from API data: "+err);
        }
    } else if (props.height && props.width && props.length) {
        try {
            let ret = new Furniture(
                props.sku ? props.sku : "",
                props.name ? props.name : "",
                props.price ? props.price : "",
                props.height ? props.height : "",
                props.width ? props.width : "",
                props.length ? props.length : ""
            );
            ret.additionalProperties = furnitureAdditionalProperties(ret);
            return ret;
        }
        catch (err: any) {
            throw new TypeError("Unable to create product from API data: "+err);
        }
    } else {
        throw new TypeError("Unknown product type");
    }
}

export default ProductFactory;