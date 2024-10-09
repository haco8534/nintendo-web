import React from 'react';
import { IconContext } from 'react-icons';
import { FaStar } from "react-icons/fa";
import style from '../../../styles/header.gamesoft.module.css';

const HeaderGamesoft = () => {
    return (
        <IconContext.Provider value = {{size: '30px'}}>
            <a href="#gamesoft" className = {style.gamesoft}> 
                <FaStar />
                <div className = {style.font}>ゲームソフト</div>   
            </a>
        </IconContext.Provider>
    );
}

export default HeaderGamesoft;