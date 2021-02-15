import React from 'react';
import classNames from 'classnames';

import './SectionBackgroundText.scss';

const SectionBackgroundText = ({ text, section }) => {
    return (
        <div className={classNames(
            'section-background-text',
            { [ `section-background-text_${section}` ]: section }
        )}>
            {text}
        </div>
    );
};

export default SectionBackgroundText;
