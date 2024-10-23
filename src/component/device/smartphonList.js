import React from 'react';
import { IconContext } from 'react-icons';
import { GiSmartphone } from "react-icons/gi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import style from '../../styles/device/smartphoneList.module.css';

const Smartphone = () => {
    return(
        <IconContext.Provider value = {{size: '50px'}}>
        <div>
        <div className = {style.smartphone}>
            <GiSmartphone />
            <div className = {style.font}>スマートフォン向け
            <br></br>
            アプリ一覧</div>
            <IoIosArrowDroprightCircle size="17px" className={style.allow} />
            </div>
        </div>
        </IconContext.Provider>
    );
}

export default Smartphone;