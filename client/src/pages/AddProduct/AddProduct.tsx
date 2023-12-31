import {FC, useState, SyntheticEvent, FormEvent, useEffect} from 'react';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import ProductFactory from '../../utils/ProductFactory';
import IButtonProps from '../../types/IButtonProps';
import { useNavigate } from 'react-router-dom';
import ProductsService from '../../services/ProductsService';
import { elementExistsInList, getSkusFromList, isSet } from '../../utils/UtilityFunctions';

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

    const [existingSkusList, setExistingSkusList] = useState<Array<String>>(new Array<String>())

    const [showExistingSku, setShowExistingSku] = useState<Boolean>(false);
    const [showEmptySku, setShowEmptySku] = useState<Boolean>(false);
    const [showEmptyName, setShowEmptyName] = useState<Boolean>(false);
    const [showEmptyPrice, setShowEmptyPrice] = useState<Boolean>(false);
    const [showPriceNaN, setShowPriceNaN] = useState<Boolean>(false);
    const [showEmptyType, setShowEmptyType] = useState<Boolean>(false);
    const [showEmptyWeight, setShowEmptyWeight] = useState<Boolean>(false);
    const [showWeightNaN, setShowWeightNaN] = useState<Boolean>(false);
    const [showEmptySize, setShowEmptySize] = useState<Boolean>(false);
    const [showSizeNaN, setShowSizeNaN] = useState<Boolean>(false);
    const [showEmptyHeight, setShowEmptyHeight] = useState<Boolean>(false);
    const [showHeightNaN, setShowHeightNaN] = useState<Boolean>(false);
    const [showEmptyWidth, setShowEmptyWidth] = useState<Boolean>(false);
    const [showWidthNaN, setShowWidthNaN] = useState<Boolean>(false);
    const [showEmptyLength, setShowEmptyLength] = useState<Boolean>(false);
    const [showLengthNaN, setShowLengthNaN] = useState<Boolean>(false);

    useEffect(() => {
        ProductsService.getAllProducts().then((response) => {
            const skusList = getSkusFromList(response.data);
            setExistingSkusList(skusList)
        })
    }, []);

    useEffect(() => {
        setShowEmptyType(false);
    },[productType]);

    const saveNewProduct: Function = async () => {
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
        await ProductsService.createProduct(newProduct);
    }

    const clearForm: Function = () => {
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

    const isValid = () => {
        return !(showEmptySku ||
            showEmptyName ||
            showEmptyPrice ||
            showPriceNaN ||
            showEmptyWeight ||
            showWeightNaN ||
            showEmptySize ||
            showSizeNaN ||
            showEmptyHeight ||
            showHeightNaN ||
            showEmptyWidth ||
            showWidthNaN ||
            showEmptyLength ||
            showLengthNaN)
    }

    const runBookValidation: Function = () => {
        validateWeight();
    }

    const runDvdValidation: Function = () => {
        validateSize();
    }

    const runFurnitureValidation: Function = () => {
        validateHeight();
        validateWidth();
        validateLength();
    }

    const productTypeValidation: Record<string, Function> = {
        "Book": runBookValidation,
        "DVD": runDvdValidation,
        "Furniture": runFurnitureValidation
    }

    const runFormValidation = () => {
        validateSku();
        validateName();
        validatePrice();
        validateType();
        if (isSet(productType)) {
            if (productType !== null) productTypeValidation[productType]()
        }
    }

    const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();
        runFormValidation();
        if (!isValid()) {
            console.log("Invalid product data");
            return;
        }
        await saveNewProduct();
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
        const target = event.target as HTMLInputElement;
        const newName = target.value;
        setName(newName);
    }

    const handlePriceChange = (event: SyntheticEvent) => {
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

        setShowEmptyWeight(false);
        setShowWeightNaN(false);
        setShowEmptySize(false);
        setShowSizeNaN(false);
        setShowEmptyHeight(false);
        setShowHeightNaN(false);
        setShowEmptyWidth(false);
        setShowWidthNaN(false);
        setShowEmptyLength(false);
        setShowLengthNaN(false);
    }

    const handleWeightChange = (event: SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newWeight = target.value;
        setWeight(newWeight);
    }

    const handleSizeChange = (event: SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newSize = target.value;
        setSize(newSize);
    }

    const handleHeightChange = (event: SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newHeight = target.value;
        setHeight(newHeight);
    }

    const handleWidthChange = (event: SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newWidth = target.value;
        setWidth(newWidth);
    }

    const handleLengthChange = (event: SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const newLength = target.value;
        setLength(newLength);
    }

    const checkExistingSku = (sku: string | null) => {
        const skuString = new String(sku);
        if (elementExistsInList(existingSkusList, skuString.toString()) && skuString !== "") {
            return true;
        }
        return false;
    }

    const validateSku = (/* event: SyntheticEvent */) => {
        // event.preventDefault();
        if (!isSet(sku)) {
            setShowEmptySku(true);
        }
        else {
            setShowEmptySku(false);
        }
        if (checkExistingSku(sku)) {
            setShowExistingSku(true);
        }
        else {
            setShowExistingSku(false);
        }
    }

    const validateName = () => {
        if (!isSet(name)) {
            setShowEmptyName(true);
            return;
        }
        setShowEmptyName(false);
    }

    const validatePrice = () => {
        if (!isSet(price)) {
            setShowEmptyPrice(true);
            setShowPriceNaN(false);
        }
        else {
            setShowEmptyPrice(false);
            // @ts-ignore
            if (isNaN(price)) {
                setShowPriceNaN(true);
            }
            else {
                setShowPriceNaN(false);
            }
        }
    }

    const validateType = () => {
        if (!isSet(productType)) {
            setShowEmptyType(true);
            return;
        }
        setShowEmptyType(false);
    }

    const validateWeight = () => {
        if (!isSet(weight)) {
            setShowEmptyWeight(true);
            setShowWeightNaN(false);
        }
        else {
            setShowEmptyWeight(false);
            // @ts-ignore
            if (isNaN(weight)) {
                setShowWeightNaN(true);
            }
            else {
                setShowWeightNaN(false);
            }
        }
    }

    const validateSize = () => {
        if (!isSet(size)) {
            setShowEmptySize(true);
            setShowSizeNaN(false);
        }
        else {
            setShowEmptySize(false);
            // @ts-ignore
            if (isNaN(size)) {
                setShowSizeNaN(true);
            }
            else {
                setShowSizeNaN(false);
            }
        }
    }

    const validateHeight = () => {
        if (!isSet(height)) {
            setShowEmptyHeight(true);
            setShowHeightNaN(false);
        }
        else {
            setShowEmptyHeight(false);
            // @ts-ignore
            if (isNaN(height)) {
                setShowHeightNaN(true);
            }
            else {
                setShowHeightNaN(false);
            }
        }
    }

    const validateWidth = () => {
        if (!isSet(width)) {
            setShowEmptyWidth(true);
            setShowWidthNaN(false);
        }
        else {
            setShowEmptyWidth(false);
            // @ts-ignore
            if (isNaN(width)) {
                setShowWidthNaN(true);
            }
            else {
                setShowWidthNaN(false);
            }
        }
    }

    const validateLength = () => {
        if (!isSet(length)) {
            setShowEmptyLength(true);
            setShowLengthNaN(false);
        }
        else {
            setShowEmptyLength(false);
            // @ts-ignore
            if (isNaN(length)) {
                setShowLengthNaN(true);
            }
            else {
                setShowLengthNaN(false);
            }
        }
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
            <div className='input-field'>
                <label>Sku</label>
                <input type='text' id='sku' onChange={handleSkuChange} onBlur={validateSku} />
            </div>
            {
                showExistingSku && <div className='input-field'>
                    <span className='validation-error'>A product with this SKU already exists. Please try different SKU</span>
                </div>
            }
            {
                showEmptySku && <div className='input-field'>
                    <span className='validation-error'>The Sku field cannot be empty</span>
                </div>
            }

            <div className='input-field'>
                <label>Name</label>
                <input type='text' id='name' onChange={handleNameChange} onBlur={validateName} />
            </div>
            {
                showEmptyName && <div className='input-field'>
                    <span className='validation-error'>The Name field cannot be empty</span>
                </div>
            }

            <div className='input-field'>
                <label>Price ($)</label>
                <input type='text' id='price' onChange={handlePriceChange} onBlur={validatePrice} />
            </div>
            {
                showEmptyPrice && <div className='input-field'>
                    <span className='validation-error'>The Price field cannot be empty</span>
                </div>
            }
            {
                showPriceNaN && <div className='input-field'>
                    <span className='validation-error'>The Price must be a number</span>
                </div>
            }

            <div className='input-field'>
                <label>Type Switcher</label>
                <select id='productType' onChange={handleProductTypeChange} onBlur={validateType} >
                    <option value="">Type</option>
                    <option value="Book">Book</option>
                    <option value="DVD">DVD</option>
                    <option value="Furniture">Furniture</option>
                </select>
            </div>
            {
                showEmptyType && <div className='input-field'>
                    <span className='validation-error'>Please pick a valid product type</span>
                </div>
            }

            {
                productType === "Book" &&
                <>
                    <div className='input-field'>
                        <label>Weight (KG)</label>
                        <input type='text' id='weight' onChange={handleWeightChange} onBlur={validateWeight} />
                    </div>
                    {
                        showEmptyWeight && <div className='input-field'>
                            <span className='validation-error'>The Weight field cannot be empty</span>
                        </div>
                    }
                    {
                        showWeightNaN && <div className='input-field'>
                            <span className='validation-error'>The Weight must be a number</span>
                        </div>
                    }
                    <div className='input-field'>
                        <span className='product-description'>Please provide the weight of the Book in KG</span>
                    </div>
                </>
            }
            {
                productType === "DVD" &&
                <>
                    <div className='input-field'>
                        <label>Size (MB)</label>
                        <input type='text' id='size' onChange={handleSizeChange} onBlur={validateSize} />
                    </div>
                    {
                        showEmptySize && <div className='input-field'>
                            <span className='validation-error'>The Size field cannot be empty</span>
                        </div>
                    }
                    {
                        showSizeNaN && <div className='input-field'>
                            <span className='validation-error'>The Size must be a number</span>
                        </div>
                    }
                    <div className='input-field'>
                        <span className='product-description'>Please provide memory capacity of the Disc in MB</span>
                    </div>
                </>
            }
            {
                productType === "Furniture" &&
                <>
                    <div className='input-field'>
                        <label>Height (CM)</label>
                        <input type='text' id='height' onChange={handleHeightChange} onBlur={validateHeight} />
                    </div>
                    {
                        showEmptyHeight && <div className='input-field'>
                            <span className='validation-error'>The Height field cannot be empty</span>
                        </div>
                    }
                    {
                        showHeightNaN && <div className='input-field'>
                            <span className='validation-error'>The Height must be a number</span>
                        </div>
                    }

                    <div className='input-field'>
                        <label>Width (CM)</label>
                        <input type='text' id='width' onChange={handleWidthChange} onBlur={validateWidth} />
                    </div>
                    {
                        showEmptyWidth && <div className='input-field'>
                            <span className='validation-error'>The Width field cannot be empty</span>
                        </div>
                    }
                    {
                        showWidthNaN && <div className='input-field'>
                            <span className='validation-error'>The Width must be a number</span>
                        </div>
                    }

                    <div className='input-field'>
                        <label>Length (CM)</label>
                        <input type='text' id='length' onChange={handleLengthChange} onBlur={validateLength} />
                    </div>
                    {
                        showEmptyLength && <div className='input-field'>
                            <span className='validation-error'>The Length field cannot be empty</span>
                        </div>
                    }
                    {
                        showLengthNaN && <div className='input-field'>
                            <span className='validation-error'>The Length must be a number</span>
                        </div>
                    }

                    <div className='input-field'>
                        <span className='product-description'>Please provide dimensions of this Furniture in CM</span>
                    </div>
                </>
            }
        </form>
        <Footer />
        </>
    );
}

export default AddProduct;