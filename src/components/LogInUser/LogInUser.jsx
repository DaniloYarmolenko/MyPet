import React from 'react'
import {Link} from "react-router-dom";


const LogInUser = () => {
    return (
        <div>
            <div >LogIn</div>
            <input  type="text"/>
            <input type="text"/>
            <input  type="password"/>
            <button>LogIn</button>
            <Link to="/userSingIn">123</Link>
        </div>
    )
}

export default LogInUser