import React from 'react';

import AdditionalDescription from "../../parts/AdditionalDescription/AdditionalDescription";
import Colors from "../../parts/Colors/Colors";
import PopularModels from "../../parts/PopularModels/PopularModels";
import Panels from "../../parts/Panels/Panels";
import ProductCartInfo from "../../parts/ProductCartInfo/ProductCartInfo";

const CartProductPage = () => {
    return (
        <main>
            <ProductCartInfo/>
            <AdditionalDescription/>
            <Colors/>
            <Panels/>
            <PopularModels/>
        </main>
    );
};

export default CartProductPage;
