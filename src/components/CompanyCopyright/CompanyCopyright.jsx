import React from 'react';

import './CompanyCopyright.scss';

import logo from '../../assets/images/logo/company-copyright.svg';

const CompanyCopyright = () => {
    return (
        <div className="company-copyright">
            <img src={logo} alt="Копирайт компании"/>
            <div className="company-copyright__text">Разработка и продвижение</div>
        </div>
    );
};

export default CompanyCopyright;
