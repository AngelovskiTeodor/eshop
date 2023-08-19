import React, {FC} from 'react';
import Product from '../../types/Product';

const ProductCard: FC<any> = ({product}) => {
    return (<>
        <div className="product-card">
            <span className="product-card-text">{product._sku}</span>
            <span className="product-card-text">{product._name}</span>
            <span className="product-card-text">{product._price}</span>
            <span className="product-card-text">{product.additionalProperties}</span>
        </div>
    </>);
}

export default ProductCard;