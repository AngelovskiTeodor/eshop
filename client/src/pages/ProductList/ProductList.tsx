import React, {FC} from "react";
import productsApi from "../../lib/axios";
import ProductCard from '../';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from "react";
import IButtonProps from "../../types/IButtonProps";
import { redirect } from "react-router-dom";
import Product from "../../types/Product";

const ProductList: FC = () => {
    const [productsList, setProductsList] = useState(new Array<Product>(0));

    const buttonProps = new Array<IButtonProps> (2);
    buttonProps[0] = {
        text: "ADD",
        behaviour: (event: any) => {
            event.preventDefault();
            return redirect("/add-product");
        }
    }
    buttonProps[1] = {
        text: "MASS DELETE",
        behaviour: (event: any) => {
            event.preventDefault();
            throw new Error("Not implemented");
        }
    }

    return (
        <>
            <Header title="Product List" buttons={buttonProps} />
            
            {productsList.map((product: Product) => (
                        <ProductCard key={product.sku} product={product}/>
                    )
            )}

            <Footer />
        </>
    );
}

export default ProductList;