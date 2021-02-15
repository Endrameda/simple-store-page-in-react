import React from 'react';

import SectionName from "../../components/SectionName/SectionName";
import SectionBackgroundText from "../../components/SectionBackgroundText/SectionBackgroundText";
import CatalogProductThumb from "../../components/CatalogProductThumb/CatalogProductThumb";

import './PopularModels.scss';
import bg1 from '../../assets/images/popular/bg-1.jpg';
import bg2 from '../../assets/images/popular/bg-2.jpg';
import bg3 from '../../assets/images/popular/bg-3.jpg';
import bg4 from '../../assets/images/popular/bg-4.jpg';
import door1 from '../../assets/images/popular/door-1.png';
import door2 from '../../assets/images/popular/door-2.png';
import door3 from '../../assets/images/popular/door-3.png';
import door4 from '../../assets/images/popular/door-4.png';

const PopularModels = () => {
    return (
        <section className="popular-models">
            <SectionBackgroundText text={'popular models'} section={'popular-models'}/>
            <div className="popular-models__container container container_parts">
                <h2 className="popular-models__title title">
                    Популярные модели
                </h2>
                <div className="popular-models__body">
                    <SectionName num={'03'} text={'Popular models'}/>
                    <div className="popular-models__list-wr">
                        <div className="popular-models__list">
                            <CatalogProductThumb
                                background={bg1}
                                door={door1}
                                text={'Стальная дверь City-03'}
                                price={'250'}
                                link={'/'}
                            />
                            <CatalogProductThumb
                                background={bg2}
                                door={door2}
                                text={'Стальная дверь City MDF 10mm'}
                                price={'250'}
                                link={'/'}
                            />
                            <CatalogProductThumb
                                background={bg3}
                                door={door3}
                                text={'Стальная дверь Barroco'}
                                price={'250'}
                                link={'/'}
                            />
                            <CatalogProductThumb
                                background={bg4}
                                door={door4}
                                text={'Стальная дверь City-03'}
                                price={'250'}
                                link={'/'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularModels;
