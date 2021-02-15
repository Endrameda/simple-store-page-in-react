import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import "./Navigation.scss";

const Navigation = ({ mobileNav, white }) => {
    return (
        <nav className={
            classNames(
                'navigation',
                { [ `navigation_${mobileNav}` ]: mobileNav },
                { 'navigation_white': white }
            )
        }>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink exact to="/" activeClassName="selected" className='navigation__link'>
                        Главная
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/catalog-production/cart-product" activeClassName="selected"
                             className='navigation__link'>
                        Каталог продукции
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/about-us" activeClassName="selected" className='navigation__link'>
                        О нас
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/certificates" activeClassName="selected" className='navigation__link'>
                        Сертификаты
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/feedbacks" activeClassName="selected" className='navigation__link'>
                        Отзывы
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/contacts" activeClassName="selected" className='navigation__link'>
                        Контакты
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
