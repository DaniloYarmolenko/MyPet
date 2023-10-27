import React, {useState} from 'react';
import Styles from './MoreSettings.module.css'
import {motion} from 'framer-motion'

const MoreSettings = ({image, title, price, setRenderBasketInMenu}) => {


    const ArrSizePrice = Object.entries(price)
    const ArrSize = []
    const ArrPrice = []
    ArrSizePrice.forEach(item => ArrSize.push(item[0]))
    ArrSizePrice.forEach(item => ArrPrice.push(item[1]))

    const [items, setItems] = useState(0)

    const MoreSettingAnimation = {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        },

    }
    const renderPrice = (items === 0) ?   ArrPrice[0] : (items === 1) ?   ArrPrice[1] : (items === 2) ?   ArrPrice[2] : ArrPrice[3]
    const renderSize = (items === 0) ?   ArrSize[0] : (items === 1) ?   ArrSize[1] : (items === 2) ?   ArrSize[2] : ArrSize[3]

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={MoreSettingAnimation}
            className={Styles.settings}>
            <img  className={Styles.img} src={image} alt=""/>
            <div className={Styles.title}>{title}</div>
            <div>{renderPrice}</div>
            {ArrSize.map((item, i)  => <button onClick={() => setItems(i)}  key={i} className={Styles.size}>{item}</button>) }<br/>
            <button
                onClick={() => setRenderBasketInMenu({title, renderPrice, renderSize})}
                className={Styles.buttonInBasket}>In basket</button>
        </motion.div>
    );
};

export default MoreSettings;