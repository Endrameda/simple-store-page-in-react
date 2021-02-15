import React from 'react';

import './SectionName.scss';

const SectionName = ({num, text}) => {
    return (
        <div className="section-name">
            <div className="section-name__num">{num}</div>
            <span className="section-name__line"/>
            <div className="section-name__text">{text}</div>
        </div>
    );
};

export default SectionName;
