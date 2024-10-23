import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillTool } from "react-icons/ai";
import style from "../../../styles/header/support.module.css";

const Support = () => {
    return(
        <IconContext.Provider value = {{size: '30px'}}>
        <a href="#support" className = {style.Support}>
            <AiFillTool />
            <div className = {style.font}>サポート</div>
        </a>
        </IconContext.Provider>
    );
};

export default Support;