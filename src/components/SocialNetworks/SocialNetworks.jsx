import React from 'react';

import './SocialNetworks.scss';

import fb from '../../assets/images/socials/facebook.svg';
import vk from '../../assets/images/socials/vk-logo-of-social-network.svg';
import inst from '../../assets/images/socials/instagram.svg';

const SocialNetworks = () => {
    return (
        <div className='social-networks'>
            <a href="https://google.com" rel="noreferrer" target="_blank">
                <img src={fb} alt="Facebook"/>
            </a>
            <a href="https://google.com" rel="noreferrer" target="_blank">
                <img src={vk} alt="V Kontakte"/>
            </a>
            <a href="https://google.com" rel="noreferrer" target="_blank">
                <img src={inst} alt="Instagram"/>
            </a>
        </div>
    );
};

export default SocialNetworks;
