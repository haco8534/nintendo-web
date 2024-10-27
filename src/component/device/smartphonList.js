import React from 'react';
import { IconContext } from 'react-icons';
import { GiSmartphone } from "react-icons/gi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import style from '../../styles/device/smartphoneList.module.css';

const Smartphone = () => {
    return (
        <IconContext.Provider value={{ size: '50px' }}>
            <div className={style.container}>
                <hr className={style.horizontalLine} />
                <div className={style.smartphone}>
                    <GiSmartphone />
                    <div className={style.text}>
                        <div className={style.font}>スマートフォン向け</div>
                        <div className={style.font}>アプリ一覧</div>
                    </div>
                        <IoIosArrowDroprightCircle size="17px" className={style.allow} />
                    </div>
                </div>
        </IconContext.Provider>
    );
}

export default Smartphone;