import React, { useState } from 'react';
import Navigation from "../Navigation/Navigation";
import classNames from 'classnames';

import "./BurgerButton.scss";

const BurgerMenu = () => {
    const [ isOpened, setIsOpened ] = useState(false);

    const openBurger = () => {
        setIsOpened(true)
        document.body.classList.add('overflow')
    }

    const closeBurger = () => {
        setIsOpened(false)
        document.body.classList.remove('overflow')
    }

    return (
        <div className="burger">
            <div className="burger__button burger__button_open" onClick={() => openBurger()}>
                <span className="burger__button-line"/>
                <span className="burger__button-line"/>
                <span className="burger__button-line"/>
            </div>
            <div className={classNames('burger__content', { 'is-open': isOpened })}>
                <div className="burger__button burger__button_close" onClick={() => closeBurger()}>
                    <span className="burger__button-line"/>
                    <span className="burger__button-line"/>
                </div>
                <div className="burger__scroller">
                    <Navigation mobileNav='burger'/>
                </div>
            </div>
            <div
                className={classNames('burger__label', { 'is-open': isOpened })}
                onClick={() => closeBurger()}/>
        </div>
    );
};

export default BurgerMenu;
