import React, {FC, SyntheticEvent, useEffect} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from "react";
import IButtonProps from "../../types/IButtonProps";
import { useNavigate } from "react-router-dom";
import Product from "../../types/Product";
import ProductsService from "../../services/ProductsService";
import ProductFactory from "../../utils/ProductFactory";

const ProductList: FC = () => {
    const navigate = useNavigate();
    const [productsList, setProductsList] = useState(new Array<Product>(0));

    const updateProducts = () => {
        ProductsService.getAllProducts().then((response) => {
            const products = response.data.map(
                (apiData) => {
                    return ProductFactory(apiData);
                }
            );
            setProductsList(products);
        });
    }

    const removeSelectedProducts = () => {
        const updatedProducts = productsList.filter( (product) => {
            return product.selected == false;
        });
        setProductsList(updatedProducts)
    }

    useEffect(updateProducts, []);

    const handleSelect = (event: SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        const sku: string = target.value;
        const updatedProducts = productsList.map((product) => {
            if (product.sku === sku) {
                product.selected = target.checked;
            }
            return product;
        })
        setProductsList(updatedProducts);
    }

    const buttonProps = new Array<IButtonProps> (2);
    buttonProps[0] = {
        text: "ADD",
        behaviour: (event: MouseEvent) => {
            event.preventDefault();
            return navigate("/add-product");
        }
    }
    buttonProps[1] = {
        text: "MASS DELETE",
        behaviour: async (event: MouseEvent) => {
            event.preventDefault();
            await ProductsService.deleteProducts(productsList).then(() => {removeSelectedProducts();});
        }
    }

    return (
        <>
            <Header title="Product List" buttons={buttonProps} />
            
            <div className="product-cards-container">
                {productsList.length > 0 && 
                    productsList.map(
                        (product: Product) => (
                            <ProductCard key={product.sku} product={product} onSelected={handleSelect} />
                        )
                    )
                }
            </div>

            <Footer />
        </>
    );
}

export default ProductList;