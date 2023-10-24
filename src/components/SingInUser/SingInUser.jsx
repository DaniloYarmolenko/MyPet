import React from 'react';
import Styles from './SingInUser.module.css'

const SingInUser = () => {
    return (
        <div>
            <div className={Styles.title}>SingIn</div>
            <input className={Styles.inputName} type="text"/>
            <input className={Styles.inputPassword} type="password"/>
            <button>In</button>
        </div>
    );
};

export default SingInUser;