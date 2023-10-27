import React from 'react';
import Styles from './SingInUser.module.css'
import {Link} from "react-router-dom";

const SingInUser = () => {
    return (
        <div>
            <div className={Styles.title}>SingIn</div>
            <input className={Styles.inputName} type="text"/>
            <input className={Styles.inputPassword} type="password"/>
            <button>In</button>
            <Link to="/userLogIn">123</Link>
        </div>
    );
};

export default SingInUser;