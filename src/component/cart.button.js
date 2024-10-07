import React from 'react';
import { IconContext } from 'react-icons';
import { MdOutlineShoppingCart } from "react-icons/md";
import style from "../styles/cart.button.module.css";

const Cart = () => {
    return(
        <IconContext.Provider value = {{size: '80px'}}>
        <div className = {style.Cart}>
            <MdOutlineShoppingCart/>
            <div className = {style.font}>ストア</div>
        </div>
        </IconContext.Provider>
    );
};

export default Cart;