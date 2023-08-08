import React, {FC} from 'react';
import Product from '../../types/Product';

const ProductCard: FC<Product> = (product: Product) => {
    return (<>
        <div className="product-card">
            <span className="product-card-text">{product.sku}</span>
            <span className="product-card-text">{product.name}</span>
            <span className="product-card-text">{product.price}</span>
            <span className="product-card-text">{product.additionalProperties()}</span>
        </div>
    </>);
}

export default ProductCard;