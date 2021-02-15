import React from 'react';

import './Phones.scss';

const Phones = () => {
    return (
        <div className="phones">
            <div className="phones__row">
                <a href="tel:+375 (29) 645-77-05">+375 (29) 645-77-05 - Елена</a>
            </div>
            <div className="phones__row">
                <a href="tel:+375 (29) 619-77-05">+375 (29) 619-77-05 - Татьяна</a>
            </div>
            <div className="phones__row">
                <a href="tel:+375 (29) 619-77-05">+375 (29) 180-77-05 - Екатерина</a>
            </div>
            <div className="phones__row">
                <a href="tel:8 (017) 219-77-05, 219-77-03 - г. тел/факс">8 (017) 219-77-05, 219-77-03 - г. тел/факс</a>
            </div>
        </div>
    );
};

export default Phones;
