import React from 'react';

import Navigation from "../../components/Navigation/Navigation";
import Logo from "../../components/Logo/Logo";
import SiteCopyright from "../../components/SiteCopyright/SiteCopyright";
import CompanyCopyright from "../../components/CompanyCopyright/CompanyCopyright";
import Address from "../../components/Address/Address";
import Phones from "../../components/Phones/Phones";
import ContactUs from "../../components/ContactUs/ContactUs";


import './Footer.scss';
import logo from '../../assets/images/logo/logo_footer.png'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <div className="footer__top">
                    <div className="footer__left footer__left-top">
                        <Logo src={logo} className={'footer'}/>
                    </div>
                    <div className="footer__right footer__right-top">
                        <Navigation white/>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__left footer__left-bottom">
                        <SiteCopyright className={'site-copyright__footer'}/>
                        <CompanyCopyright/>
                    </div>
                    <div className="footer__right footer__right-bottom">
                        <Address/>
                        <Phones/>
                        <ContactUs/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
