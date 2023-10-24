import React, {useState} from 'react';
import ButtonFilterItem from "../ButtonFilterItem/ButtonFilterItem";
import Styles from './Filterlist.module.css'
import FilterItem from "../FilterItem/FilterItem";


const FilterList = ({setRenderMainManu}) => {

    const [filterButton, setFilterButton] = useState([
        {value: 'Burger', id: 1},
        {value: 'Free', id: 2},
        {value: 'Drinks', id: 3},
        {value: 'Snacks', id: 4}
    ])

    return (
        <div className={Styles.FilterList}>
            <div className={Styles.container}>
                <div className={Styles.flex}>
                   <div>
                       {filterButton.map(item => <ButtonFilterItem onClick={() => setRenderMainManu(item.value)} key={item.id} text={item.value}/>)}
                   </div>
                    <FilterItem options={[
                        {value: 'priseLowToHight', name: "LowToHight"},
                        {value: 'priseHightToLow', name: "LowToHight"}
                    ]} defaultValue={123}/>
                </div>
            </div>
        </div>
    );
};

export default FilterList;