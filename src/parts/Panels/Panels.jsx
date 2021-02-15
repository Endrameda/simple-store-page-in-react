import React from 'react';

import SectionBackgroundText from "../../components/SectionBackgroundText/SectionBackgroundText";
import SectionName from "../../components/SectionName/SectionName";
import PanelsCarousel from "../../components/PanelsCarousel/PanelsCarousel";

import './Panels.scss';

import document from '../../assets/images/icons/document.svg';

let panels = [
    {name: 'H1', src: require('../../assets/images/panel/panel.svg').default},
    {name: 'H2', src: require('../../assets/images/panel/panel.svg').default},
    {name: 'H3', src: require('../../assets/images/panel/panel.svg').default},
    {name: 'H4', src: require('../../assets/images/panel/panel.svg').default},
    {name: 'H5', src: require('../../assets/images/panel/panel.svg').default},
    {name: 'H6', src: require('../../assets/images/panel/panel.svg').default},
    {name: 'H7', src: require('../../assets/images/panel/panel.svg').default},
    {name: 'H8', src: require('../../assets/images/panel/panel.svg').default},
    {name: 'H9', src: require('../../assets/images/panel/panel.svg').default},
    {name: 'H10', src: require('../../assets/images/panel/panel.svg').default},
    {name: 'H11', src: require('../../assets/images/panel/panel.svg').default},
    {name: 'H12', src: require('../../assets/images/panel/panel.svg').default},
    {name: 'H13', src: require('../../assets/images/panel/panel.svg').default},
]

const Panels = () => {
    return (
        <section className="panels">
            <SectionBackgroundText text={'panels'} section={'panels'}/>
            <div className="panels__container container container_parts">
                <h2 className="panels__title title">Рисунок МДФ панелей</h2>
                <div className="panels__body">
                    <SectionName num={'02'} text={'Panels'}/>
                    <PanelsCarousel panels={panels}/>
                    <div className="panels__more">
                        <a href="/" className='panels__more-link'>
                            <span className="panels__more-icon">
                                <img src={document} alt=""/>
                            </span>
                            Смотреть больше МДФ панелей
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Panels;
