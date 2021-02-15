import React from 'react';

import Button from "../Button/Button";

import './CatalogProductThumb.scss';

const CatalogProductThumb = ({ background, door, text, price, link }) => {
    return (
        <div className={`catalog-product-thumb`}>
            <div className="catalog-product-thumb__in">
                <div className="catalog-product-thumb__top">
                    <div className="catalog-product-thumb__bg-img"
                         style={{ backgroundImage: `url(${background})` }}/>
                    <div className="catalog-product-thumb__door">
                        <img src={door} alt=""/>
                    </div>
                </div>
                <div className="catalog-product-thumb__info">
                    <div className="catalog-product-thumb__text" title={text}>{text}</div>
                    <div className="catalog-product-thumb__price">
                        от {price} BYN
                    </div>
                    <Button
                        className={'button_red'}
                        text={'Подробнее'} link={link} hasStroke/>
                </div>
            </div>
        </div>
    );
};

export default CatalogProductThumb;
