import React, {FC} from 'react';
import Product from '../../types/Product';

const ProductCard: FC<any> = ({product, onSelected}) => {

    return (<>
        <div className="product-card">
            <span className="product-card-text">
                <input className="delete-checkbox" type="checkbox" value={product.sku} checked={product.selected} onChange={onSelected}></input>
                {product.sku}
            </span>
            <span className="product-card-text">{product.name}</span>
            <span className="product-card-text">{product.price}</span>
            <span className="product-card-text">{product.additionalProperties}</span>
        </div>
    </>);
}

export default ProductCard;