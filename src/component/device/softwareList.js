import React from 'react';
import { IconContext } from 'react-icons';
import { GiConsoleController } from "react-icons/gi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import style from '../../styles/device/softwareList.module.css';

const Software = () => {
    return (
        <IconContext.Provider value={{ size: '50px' }}>
            <div className={style.container}>
                <hr className={style.horizontalLine} />
                <div className={style.software}>
                    <GiConsoleController />
                    <div className={style.text}>
                        <div className={style.font}>Nintendo Swith</div>
                        <div className={style.font}>ソフトウェア一覧</div>
                    </div>
                    <IoIosArrowDroprightCircle size="17px" className={style.allow} />
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default Software;