import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillAliwangwang } from "react-icons/ai";
import style from "../../../styles/header/character.module.css";

const Character = () => {
    return(
        <IconContext.Provider value = {{size: '30px'}}>
        <a href="#character" className = {style.Character}>
            <AiFillAliwangwang/>
            <div className = {style.font}>キャラクター</div>
        </a>
        </IconContext.Provider>
    );
};

export default Character;