import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import Swiper from 'react-id-swiper';

import './ProductCartInfoCarousel.scss';

SwiperCore.use([ Pagination ]);

const ProductCartInfoCarousel = ({images}) => {
    const params = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    }
    return (
        <div className="product-cart-info-carousel">
            <Swiper {...params}>
                {
                    images.map(item => (
                        <div key={item.alt}>
                            <img src={item.src} alt={item.alt}/>
                        </div>
                    ))
                }
            </Swiper>
        </div>
    )
};

export default ProductCartInfoCarousel;
