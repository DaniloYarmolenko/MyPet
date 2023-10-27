import React, {useState} from 'react';
import TopManu from "../components/TopManu/TopManu";
import FilterList from "../components/filterList/FilterList";
import MainManu from "../components/MainMenu/MainManu";
import BasketInMenu from "../components/BasketInMenu/BasketInMenu";

const MainPage = () => {

    const [renderMainManu, setRenderMainManu] = useState({nameButton:''})
    const [renderBasketInMenu, setRenderBasketInMenu] = useState({title: '', price: '', size: ''})
    console.log(renderBasketInMenu);
    return (

        <div>
            <TopManu renderBasketInMenu={renderBasketInMenu}/>
            <FilterList setRenderMainManu={setRenderMainManu}/>
            <MainManu renderMainManu={renderMainManu} setRenderBasketInMenu={setRenderBasketInMenu}/>
        </div>
    );
};

export default MainPage;