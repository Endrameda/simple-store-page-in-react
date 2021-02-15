import React from 'react';

import './Button.scss';

const Button = ({ link, text, className, hasStroke }) => {
    return (
        <>
            {className === 'button_red' &&
            <div className='button-red'>
                {link ? <a className={`button ${className}`} href={link} rel='noreferrer'>
                        {text}
                        {hasStroke &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 50" preserveAspectRatio="none">
                            <rect width="100%" height="100%" stroke="#ef3d39" strokeWidth="3" fill="none"/>
                        </svg>
                        }
                    </a> :
                    <button className={`button ${className}`} href={link} rel='noreferrer'>
                        {text}
                        {hasStroke &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 50" preserveAspectRatio="none">
                            <rect width="100%" height="100%" stroke="#ef3d39" strokeWidth="3" fill="none"/>
                        </svg>
                        }
                    </button>
                }
            </div>
            }
        </>
    );
};

export default Button;
