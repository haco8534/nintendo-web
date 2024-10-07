import React from 'react';
import { IconContext } from 'react-icons';
import { FaMagnifyingGlass } from "react-icons/fa6";
import style from "../styles/serch.button.module.css";

const Serch = () => {
    return(
        <IconContext.Provider value = {{size: '60px'}}>
        <div className = {style.Serch}>
            <FaMagnifyingGlass/>
            <div className = {style.font}>さがす</div>
        </div>
        </IconContext.Provider>
    );
};

export default Serch;