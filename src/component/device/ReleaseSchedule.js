import React from 'react';
import { IconContext } from 'react-icons';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import style from '../../styles/device/ReleaseSchedule.module.css';

const Schedule = () => {
    return(
        <IconContext.Provider value={{ size: "15px" }}>
            <div className = {style.schedule}>
                <IoIosArrowDroprightCircle className={style.allow}/>
                <div className = {style.font}>発売スケジュール</div>
            </div>
        </IconContext.Provider>
    );
}

export default Schedule;