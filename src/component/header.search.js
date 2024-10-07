import React from 'react';
import { IconContext } from 'react-icons';
import { HiOutlineSearch } from "react-icons/hi";
import style from '../styles/header.search.module.css';

const HeaderSearch = () => {
    return (
        <IconContext.Provider value = {{size: '50px'}}>
            <a className = {style.search}>
                <HiOutlineSearch/>
                <div className = {style.font}>さがす</div>   
            </a>
        </IconContext.Provider>
    );
}

export default HeaderSearch;