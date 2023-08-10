import React, {FC} from "react";
import productsApi from "../../lib/axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from "react";
import IButtonProps from "../../types/IButtonProps";
import { useNavigate } from "react-router-dom";
import Product from "../../types/Product";

const ProductList: FC = () => {
    const navigate = useNavigate();
    const [productsList, setProductsList] = useState(new Array<Product>(0));

    const buttonProps = new Array<IButtonProps> (2);
    buttonProps[0] = {
        text: "ADD",
        behaviour: (event: MouseEvent) => {
            console.log("ProductList: redirecting to /add-product")
            event.preventDefault();
            return navigate("/add-product");
        }
    }
    buttonProps[1] = {
        text: "MASS DELETE",
        behaviour: (event: MouseEvent) => {
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