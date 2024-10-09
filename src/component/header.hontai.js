import React from 'react';
import { IconContext } from 'react-icons';
import { MdOutlineGames } from "react-icons/md";
import style from '../styles/header.hontai.module.css';

const HeaderHontai = () => {
    return (
        <IconContext.Provider value = {{size: '50px'}}>
            <a href="#" className = {style.hontai}> 
            <MdOutlineGames />
                <div className = {style.font}>本体・amibo</div>   
            </a>
        </IconContext.Provider>
    );
}

export default HeaderHontai;