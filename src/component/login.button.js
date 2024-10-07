import React from 'react';
import { IconContext } from 'react-icons';
import { FaUserLarge } from "react-icons/fa6";
import style from "../styles/login.button.module.css";

const Login = () => {
    return(
        <IconContext.Provider value = {{size: '70px'}}>
        <div className = {style.Login}>
            <FaUserLarge/>
            <div className = {style.font}>ログイン</div>
        </div>
        </IconContext.Provider>
    );
};

export default Login;