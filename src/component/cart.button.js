import React from 'react';
import { IconContext } from 'react-icons';
import { MdOutlineShoppingCart } from "react-icons/md";
import style from '../styles/cart.button.module.css';

const CartButton = () => {
    return (
        <IconContext.Provider value = {{size: '50px'}}>
            <div> 
                <MdOutlineShoppingCart className = {style.cart}/>
                <div className = {style.font}>ストア</div>   
            </div>
        </IconContext.Provider>
    );
}

export default CartButton;