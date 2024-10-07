import React from 'react';
import { IconContext } from 'react-icons';
import { CgWebsite } from "react-icons/cg";
import style from '../styles/header.topics.module.css';

const HeaderTopics = () => {
    return (
        <IconContext.Provider value = {{size: '50px'}}>
            <a className = {style.topics}> 
            <CgWebsite />
                <div className = {style.font}>トピックス</div>   
            </a>
        </IconContext.Provider>
    );
}

export default HeaderTopics;