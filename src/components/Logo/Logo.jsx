import React from 'react';
import classNames from "classnames";

import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = ({ src, className }) => {
    return (
        <Link to="/" className={classNames('logo', { [ `logo_${className}` ]: className })}>
            <img  src={src} alt="Логотип компании"/>
        </Link>
    );
};

export default Logo;
