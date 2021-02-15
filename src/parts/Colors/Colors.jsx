import React from 'react';

import SectionBackgroundText from "../../components/SectionBackgroundText/SectionBackgroundText";
import SectionName from "../../components/SectionName/SectionName";
import Color from "../../components/Color/Color";

import './Colors.scss';

import img1 from '../../assets/images/colors/101-64-250x250-praktik-svetlyiy-min.jpg';
import img2 from '../../assets/images/colors/5409-2-250h250-praktik-temnyiy-min.jpg';
import img3 from '../../assets/images/colors/dub_antik-min.jpg';
import img4 from '../../assets/images/colors/Dub-zolotoy-233T-2-T-e1476953562620-min.jpg';
import img5 from '../../assets/images/colors/ekodub_molochnyy-min.jpg';
import img6 from '../../assets/images/colors/ekokashtan-min.jpg';
import img7 from '../../assets/images/colors/ekooreh_italiya-min.jpg';
import img8 from '../../assets/images/colors/ekooreh-min.jpg';
import img9 from '../../assets/images/colors/ekovenge-min.jpg';
import img10 from '../../assets/images/colors/oreh_temnyy-min.jpg';
import img11 from '../../assets/images/colors/Staroe-derevo-246T-1-e1476953469171-min.jpg';
import img12 from '../../assets/images/colors/tik_derevo-min.jpg';
import img13 from '../../assets/images/colors/tikovoe_derevo-min.jpg';
import img14 from '../../assets/images/colors/Tikovoe-derevo-246-3T-1-e1476953389361-min.jpg';
import img15 from '../../assets/images/colors/venge_svetlyy-min.jpg';
import img16 from '../../assets/images/colors/Venge-svetlyiy-194-7T-1-e1476953645806-min-300x300.jpg';
import img17 from '../../assets/images/colors/venge-temnyy-min.jpg';

const Colors = () => {
    return (
        <section className='colors'>
            <SectionBackgroundText text={'colors'} section={'colors'}/>
            <div className="colors__container container container_parts">
                <h2 className="colors__title title">Варианты цветового исполнения</h2>
                <div className="colors__body">
                    <SectionName num={'01'} text={'colors'}/>
                    <div className="colors__list">
                        <div className="colors__list-in">
                            <Color num="01" text="Практик Светлый" src={img1}/>
                            <Color num="02" text="Практик Темный" src={img2}/>
                            <Color num="03" text="Дуб Антик" src={img3}/>
                            <Color num="01" text="Практик Светлый" src={img4}/>
                            <Color num="02" text="Практик Темный" src={img5}/>
                            <Color num="03" text="Дуб Антик" src={img6}/>
                            <Color num="01" text="Практик Светлый" src={img7}/>
                            <Color num="02" text="Практик Темный" src={img8}/>
                            <Color num="01" text="Практик Светлый" src={img9}/>
                            <Color num="02" text="Практик Темный" src={img10}/>
                            <Color num="03" text="Дуб Антик" src={img11}/>
                            <Color num="01" text="Практик Светлый" src={img12}/>
                            <Color num="02" text="Практик Темный" src={img13}/>
                            <Color num="03" text="Дуб Антик" src={img14}/>
                            <Color num="01" text="Практик Светлый" src={img15}/>
                            <Color num="02" text="Практик Темный" src={img16}/>
                            <Color num="03" text="Дуб Антик" src={img17}/>
                            <Color num="01" text="Практик Светлый" src={img2}/>
                            <Color num="02" text="Практик Темный" src={img4}/>
                            <Color num="03" text="Дуб Антик" src={img3}/>
                            <Color num="03" text="Дуб Антик" src={img12}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Colors;
