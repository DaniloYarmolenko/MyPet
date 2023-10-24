import React from 'react';
import Styles from './FilterItem.module.css'

const FilterItem = ({options, defaultValue}) => {
    return (
        <select className={Styles.select}>
            <option disabled>{defaultValue}</option>
            {options.map(item =>
                <option key={item.value} value={item.value}>
                    {item.name}
                </option>
            )}

        </select>
    );
};

export default FilterItem;