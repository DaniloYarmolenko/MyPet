import React from 'react';
import Styles from './CardManu.module.css'


const CardManu = ({image, title, alt, price, setCardData}) => {
    return (
        <div className={Styles.card}>
            <img className={Styles.img} src={image} alt={alt}/>
            <div  className={Styles.titleCard}>{title}</div>
            <div className={Styles.price}>{price.XS}-{price.L}</div>
            <button onClick={() => setCardData({title, image, price})} className={Styles.button}>In basket</button>
        </div>
    );
};

export default CardManu;