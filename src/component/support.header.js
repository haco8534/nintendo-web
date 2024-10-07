import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillTool } from "react-icons/ai";
import style from "../styles/support.header.module.css";

const Support = () => {
    return(
        <IconContext.Provider value = {{size: '80px'}}>
        <div className = {style.Support}>
        <div class="flex">
            <AiFillTool />
            <div className = {style.font}>サポート</div>
        </div>
        </div>
        </IconContext.Provider>
    );
};

export default Support;