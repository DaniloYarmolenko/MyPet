import React, {useState} from 'react';
import TopManu from "../components/TopManu/TopManu";
import FilterList from "../components/filterList/FilterList";
import MainManu from "../components/MainMenu/MainManu";

const MainPage = () => {

    const [renderMainManu, setRenderMainManu] = useState({nameButton:''})

    return (

        <div>
            <TopManu />
            <FilterList setRenderMainManu={setRenderMainManu}/>
            <MainManu renderMainManu={renderMainManu}/>
        </div>
    );
};

export default MainPage;