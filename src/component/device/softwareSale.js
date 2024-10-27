import React from 'react';
import { IconContext } from 'react-icons';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import style from '../../styles/device/softwareSale.module.css';

const Sale = () => {
    return (
        <IconContext.Provider value={{ size: "15px" }}>
            <div className={style.sale}>
                <IoIosArrowDroprightCircle className={style.allow} />
                <div className={style.font}>セール中のソフト</div>
            </div>
        </IconContext.Provider>
    );
}

export default Sale;