import React from 'react';
import { IconContext } from 'react-icons';
import { MdOutlineShoppingCart } from "react-icons/md";
import style from '../styles/header.cart.module.css';

const HeaderCart = () => {
    return (
        <IconContext.Provider value = {{size: '50px'}}>
            <div> 
                <MdOutlineShoppingCart className = {style.cart}/>
                <div className = {style.font}>ストア</div>   
            </div>
        </IconContext.Provider>
    );
}

export default HeaderCart;