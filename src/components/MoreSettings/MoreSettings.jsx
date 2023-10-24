import React, {useState} from 'react';
import Styles from './MoreSettings.module.css'
import log from '../TopManu/img/Shopping Basket.png'

const MoreSettings = ({image, title, price}) => {


    const ArrSizePrice = Object.entries(price)
    const ArrSize = []
    const ArrPrice = []
    ArrSizePrice.forEach(item => ArrSize.push(item[0]))
    ArrSizePrice.forEach(item => ArrPrice.push(item[1]))

    const [items, setItems] = useState(0)

    return (
        <div className={Styles.settings}>
            <img className={Styles.img} src={image} alt=""/>
            <div className={Styles.title}>{title}</div>
            <div>{(items === 0) ?   ArrPrice[0] : (items === 1) ?   ArrPrice[1] : (items === 2) ?   ArrPrice[2] : ArrPrice[3]}</div>
            {ArrSize.map((item, i)  => <button onClick={() => setItems(i)}  key={i} className={Styles.size}>{item}</button>) }<br/>
            <button className={Styles.buttonInBasket}>In basket</button>
        </div>
    );
};

export default MoreSettings;