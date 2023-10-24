import React from 'react';
import Styles from './ButtonFilterItem.module.css'

const ButtonFilterItem = ({text, ...options}) => {
    return (
        <button className={Styles.button} {...options}>
            {text}
        </button>
    );
};

export default ButtonFilterItem;