import React, { useEffect, useState } from "react";
import { throttle } from 'lodash';


import Navigation from "../../components/Navigation/Navigation";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Logo from "../../components/Logo/Logo";

import logo from "../../assets/images/logo/logo.png"
import "./Header.scss";


const Header = () => {
    const [ isMobile, setIsMobile ] = useState(false);

    const throttledHandleWindowResize = () => {
        return throttle(() => {
            setIsMobile(window.innerWidth <= 1280)
        }, 200);
    }

    useEffect(() => {
        window.addEventListener('resize', throttledHandleWindowResize())

        if (window.innerWidth <= 1280) {
            setIsMobile(true)
        }

        return function () {
            window.removeEventListener('resize', throttledHandleWindowResize())
        }
    }, []) // eslint-disable-line

    return (
        <header className='header'>
            <div className="header__container container">
                <div className="header__left">
                    <Logo src={logo} className='header'/>
                </div>
                <div className="header__right">
                    {!isMobile
                        ? <Navigation/>
                        : <BurgerMenu/>}
                </div>
            </div>
        </header>
    );
};

export default Header;
