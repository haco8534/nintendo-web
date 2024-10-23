import React from 'react';
import { IconContext } from 'react-icons';
import { GiConsoleController } from "react-icons/gi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import style from '../../styles/device/softwareList.module.css';

const Software = () => {
    return(
        <IconContext.Provider value = {{size: '50px'}}>
        <div>
        <div className = {style.software}>
            <GiConsoleController />
            <div className = {style.font}>Nintendo Swith
            <br></br>
            ソフトウェア一覧</div>
            <IoIosArrowDroprightCircle size="17px" className={style.allow} />
            </div>
        </div>
        </IconContext.Provider>
    );
}

export default Software;