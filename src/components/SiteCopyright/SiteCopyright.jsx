import React from 'react';

import './SiteCopyright.scss';

const SiteCopyright = ({ className }) => {
    return (
        <div className={`site-copyright ${className}`}>
            ПЧУП «Интеркомплект» УНП 100507596
        </div>
    );
};

export default SiteCopyright;
