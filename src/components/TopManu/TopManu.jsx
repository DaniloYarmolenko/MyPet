import React, {useState} from 'react';
import logo from './img/Shortcut Logo.png'
import user from './img/User.png'
import search from './img/Search.png'
import doorbell from './img/Doorbell.png'
import basket from './img/Shopping Basket.png'
import fullBasket from './img/Full Shopping Basket.png'
import close from './img/Close.png'
import Styles from './TopManu.module.css'
import {Link} from "react-router-dom";


const TopManu = () => {

    const [isSearch, setIsSearch] = useState(false)
    const [isBasket, setIsBasket] = useState(false)

    const toggleSearch = () => {
        setIsSearch((value) => !value )
    }

    return (
        <div className={Styles.header}>
            <div className={Styles.container}>
                <div className={Styles.flex}>
                <div className={Styles.user}>
                    <Link to='/userSingIn'><img src={user} alt=""/></Link>
                    <img onClick={() => toggleSearch()} src={isSearch ?close : search}  alt=""/>
                    {isSearch  && <input className={Styles.input} type="text"/>}

                </div>
                <img className={Styles.logo} src={logo} alt=""/>
                <div className={Styles.store}>
                    <img src={doorbell} alt=""/>
                    <img src={isBasket ?fullBasket :basket} alt=""/>
                </div></div>
            </div>

        </div>
    );
};

export default TopManu;