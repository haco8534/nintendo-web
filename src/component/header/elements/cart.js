import React from 'react';
import { IconContext } from 'react-icons';
import { MdOutlineShoppingCart } from "react-icons/md";
import style from '../../../styles/header/cart.module.css';

const Cart = () => {
    return (
        <IconContext.Provider value = {{size: '30px'}}>
            <a href="#shop" className = {style.cart}> 
                <MdOutlineShoppingCart/>
                <div className = {style.font}>ストア</div>   
            </a>
        </IconContext.Provider>
    );
}

export default Cart;