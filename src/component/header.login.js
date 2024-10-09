import React from 'react';
import { IconContext } from 'react-icons';
import { MdPerson } from "react-icons/md";
import style from '../styles/header.login.module.css';

const HeaderLogin = () => {
    return (
        <IconContext.Provider value = {{size: '50px'}}>
            <a href="#" className = {style.login}>
                <MdPerson/>
                <div className = {style.font}>ログイン</div>   
            </a>
        </IconContext.Provider>
    );
}

export default HeaderLogin;