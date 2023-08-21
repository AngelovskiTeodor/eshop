import React, {FC, useState, SyntheticEvent, FormEvent} from 'react';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import ProductFactory from '../../utils/ProductFactory';
import IButtonProps from '../../types/IButtonProps';
import { useNavigate } from 'react-router-dom';
import ProductsService from '../../services/ProductsService';

const AddProduct:FC = () => {
    const navigate = useNavigate();

    const [sku, setSku] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [price, setPrice] = useState<string | null>(null);
    const [productType, setProductType] = useState<string | null>(null);
    const [weight, setWeight] = useState<string | null>(null);
    const [size, setSize] = useState<string | null>(null);
    const [height, setHeight] = useState<string | null>(null);
    const [width, setWidth] = useState<string | null>(null);
    const [length, setLength] = useState<string | null>(null);

    const saveNewProduct: Function = () => {
        const newProductProps = {
            sku: sku,
            name: name,
            price: price,
            type: productType,
            weight: weight,
            size: size,
            height: height,
            width: width,
            length: length,
        }
        const newProduct = ProductFactory(newProductProps);
        console.log("AddProduct: newProduct: "+ newProduct);
        ProductsService.createProduct(newProduct);
    }

    const clearForm: Function = () => {
        console.log("AddProduct: clearing form")
        setSku(null);
        setName(null);
        setPrice(null);
        setProductType(null);
        setWeight(null);
        setSize(null);
        setHeight(null);
        setWidth(null);
        setLength(null);
    }

    const CancelAction = () => {
        clearForm();
        navigate("/");
    }

    const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();
        console.log("AddProduct: handling submit")
        saveNewProduct();
        navigate("/");
    }

    const handleSkuChange = (event: SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newSku = target.value;
        setSku(newSku);
    }

    const handleNameChange = (event: SyntheticEvent) => {
        event.preventDefault();
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newName = target.value;
        setName(newName);
    }

    const handlePriceChange = (event: SyntheticEvent) => {
        event.preventDefault();
        event.preventDefault();
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newPrice = target.value;
        setPrice(newPrice);
    }

    const handleProductTypeChange = (event: SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLSelectElement;
        const newProductType = target.value;
        setProductType(newProductType);
    }

    const handleWeightChange = (event: SyntheticEvent) => {
        event.preventDefault();
        event.preventDefault();
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newWeight = target.value;
        setWeight(newWeight);
    }

    const handleSizeChange = (event: SyntheticEvent) => {
        event.preventDefault();
        event.preventDefault();
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newSize = target.value;
        setSize(newSize);
    }

    const handleHeightChange = (event: SyntheticEvent) => {
        event.preventDefault();
        event.preventDefault();
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newHeight = target.value;
        setHeight(newHeight);
    }

    const handleWidthChange = (event: SyntheticEvent) => {
        event.preventDefault();
        event.preventDefault();
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newWidth = target.value;
        setWidth(newWidth);
    }

    const handleLengthChange = (event: SyntheticEvent) => {
        event.preventDefault();
        event.preventDefault();
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newLength = target.value;
        setLength(newLength);
    }

    const buttonProps = new Array<IButtonProps>(2);
    buttonProps[0] = {
        text: "Save",
        behaviour: handleSubmit
    }
    buttonProps[1] = {
        text: "Cancel",
        behaviour: CancelAction
    }

    return (
        <>
        <Header title="Product Add" buttons={buttonProps}/>
        <form onSubmit={handleSubmit} id='product_form'>
            <label>Sku</label>
            <input type='text' id='sku' onChange={handleSkuChange}/>

            <label>Name</label>
            <input type='text' id='name' onChange={handleNameChange}/>

            <label>Price ($)</label>
            <input type='text' id='price' onChange={handlePriceChange}/>

            <label>Type Switcher</label>
            <select id='productType' onChange={handleProductTypeChange}>
                <option value="">Type</option>
                <option value="Book">Book</option>
                <option value="DVD">DVD</option>
                <option value="Furniture">Furniture</option>
            </select>

            {
                productType === "Book" &&
                <>
                    <label>Weight (KG)</label>
                    <input type='text' id='weight' onChange={handleWeightChange}/>
                    <span className='product-description'>Please provide the weight of the Book in KG</span>
                </>
            }
            {
                productType === "DVD" &&
                <>
                    <label>Size (MB)</label>
                    <input type='text' id='size' onChange={handleSizeChange}/>
                    <span className='product-description'>Please provide memory capacity of the Disc in MB</span>
                </>
            }
            {
                productType === "Furniture" &&
                <>
                    <label>Height (CM)</label>
                    <input type='text' id='weight' onChange={handleHeightChange}/>

                    <label>Width (CM)</label>
                    <input type='text' id='width' onChange={handleWidthChange}/>

                    <label>Length (CM)</label>
                    <input type='text' id='length' onChange={handleLengthChange}/>

                    <span className='product-description'>Please provide dimensions of this Furniture in CM</span>
                </>
            }
        </form>
        <Footer />
        </>
    );
}

export default AddProduct;