import React from 'react';
import { NavLink } from "react-router-dom";

import './SitePath.scss';

const SitePath = () => {
    return (
        <div className="site-path">
            <NavLink exact to='/' className='site-path__item'>
                главная /
            </NavLink>
            <NavLink exact to='/' className='site-path__item'>
                КАТАЛОГ ПРОДУКЦИИ /
            </NavLink>
            <NavLink exact to='/' className='site-path__item'>
                входные двери /
            </NavLink>
            <NavLink exact to='/' className='site-path__item'>
                Стальная дверь BAROCCO
            </NavLink>
        </div>
    );
};

export default SitePath;
