import React from 'react';

import ProductParams from "../../components/ProductParams/ProductParams";
import ProductCartInfoCarousel from "../../components/ProductCartInfoCarousel/ProductCartInfoCarousel";

import './ProductCartInfo.scss';

import Button from "../../components/Button/Button";

let params = [
    { name: 'Размеры', value: '2050х860мм 2050х960мм' },
    { name: 'Высота', value: 'Сварная.2-х сторонний МДФ в отделке' },
    { name: 'Толщина наружного листа', value: '1,2 мм. 1.5 мм. 2 мм. на выбор' },
    { name: 'Толщина полотна', value: '66мм' },
    { name: 'Тип петель и количество петель', value: 'Открытые на подшипниках, 2  шт' },
    { name: 'Угол открывания', value: '180 градусов' },
    { name: 'Теплоизоляция коробки', value: 'Минеральная вата Izovol(плотность 75)' },
    { name: 'Теплоизоляция коробки', value: 'Минеральная вата Izovol(плотность 75) asd' },
    { name: 'Тип нижнего замка', value: 'Замок Avers' },
    { name: 'Ручка', value: 'Раздельная Avers' },
    {
        name: 'Отделка внутренней', value: `Винил,МДФ 8 мм. 22 базовых цвета. 80 доп. цветов.115 рисунков фрезеровки`
    },
    { name: 'Цвет полимерного покрытия', value: 'Антик Серебро.Teknos Финляндия' },
]

let images = [
    {src: require('../../assets/images/product-info/image.jpg').default, alt: 'Первая картинка'},
    {src: require('../../assets/images/product-info/image.jpg').default, alt: 'Вторая картинка'}
]

const ProductCartInfo = () => {
    return (
        <section className="product-cart-info">
            <div className="product-cart-info__container container">
                <div className="product-cart-info__left">
                    <ProductCartInfoCarousel images={images}/>
                </div>
                <div className="product-cart-info__right">
                    <h2 className="product-cart-info__title">Стальная дверь Barroco</h2>
                    <div className="product-cart-info__category">Категория: Входные двери</div>
                    <ProductParams params={params}/>
                    <div className="product-cart-info__price">от 450 BYN</div>
                    <Button
                        className={'button_red'}
                        text={'Заказать дверь'} link={'/'} hasStroke/>
                </div>
            </div>
        </section>
    );
};

export default ProductCartInfo;
