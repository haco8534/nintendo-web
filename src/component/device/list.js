import React from 'react';
import Software from './softwareList';
import Smartphone from './smartphonList';
import Schedule from './schedule';
import style from '../../styles/device/list.module.css';

const Device = () => {
    return (
        <div className={style.list}>
            <Software></Software>
            <div className={style.divider}></div>
            <Smartphone></Smartphone>
            <Schedule></Schedule>
        </div>
    );
}

export default Device;