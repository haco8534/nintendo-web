import React from 'react';
import { IconContext } from 'react-icons';
import { HiOutlineSearch } from "react-icons/hi";
import style from '../styles/header.search.module.css';

const HeaderSearch = () => {
    return (
        <IconContext.Provider value = {{size: '50px'}}>
            <div>
                <HiOutlineSearch className = {style.search}/>
                <div className = {style.font}>さがす</div>   
            </div>
        </IconContext.Provider>
    );
}

export default HeaderSearch;