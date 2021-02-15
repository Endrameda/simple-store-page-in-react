import React from 'react';

import './ContactUs.scss';
import SocialNetworks from "../SocialNetworks/SocialNetworks";

const ContactUs = () => {
    return (
        <div className='contact-us'>
            <div className="contact-us__title">Связаться с нами:</div>
            <a href="mailto:info@tirisan.by" className="contact-us__email">info@tirisan.by</a>
            <SocialNetworks/>
        </div>
    );
};

export default ContactUs;
