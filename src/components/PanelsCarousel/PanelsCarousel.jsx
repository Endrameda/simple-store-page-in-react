import React from 'react';
import SwiperCore, { Scrollbar, Navigation } from 'swiper';
import Swiper from 'react-id-swiper';

import './PanelsCarousel.scss';

SwiperCore.use([ Scrollbar, Navigation ]);

const PanelsCarousel = ({ panels }) => {
    const params = {

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1366: {
                slidesPerView: 6,
                spaceBetween: 117,
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 80,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 55,
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 55,
            },
            481: {
                slidesPerView: 3,
                spaceBetween: 55,
            },
            0: {
                slidesPerView: 2,
                spaceBetween: 55,
            }
        }
    }

    return (
        <div className='panels-carousel'>
            <Swiper {...params}>
                {panels.map(item => (
                    <div key={item.name} className="panels-carousel__slide">
                        <div className="panels-carousel__img">
                            <img src={item.src} alt=""/>
                        </div>
                        <div className="panels-carousel__text">
                            {item.name}
                        </div>
                    </div>
                ))}
            </Swiper>
        </div>
    );
};

export default PanelsCarousel;
