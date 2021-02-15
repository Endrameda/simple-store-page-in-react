import React from 'react';

import './ProductParams.scss';

const ProductParams = ({ params }) => {
    return (
        <div className="product-params">
            {
                params.map(param => (
                    <div key={param.value} className="product-params__param-row">
                        <div className="product-params__param-name">{param.name}</div>
                        <div className="product-params__param-value">{param.value}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductParams;
