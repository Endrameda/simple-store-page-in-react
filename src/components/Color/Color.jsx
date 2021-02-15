import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import './Color.scss';


const Color = ({src, text, num}) => {
    return (
        <div className="color">
            <div className="color__in">
                <div className="color__img">
                    <LazyLoadImage src={src} alt={text} effect={'blur'}/>
                </div>
                <div className="color__text">
                    {`${num} ${text}`}
                </div>
            </div>
        </div>
    );
};

export default Color;
