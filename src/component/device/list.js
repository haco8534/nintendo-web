import React from 'react';
import Software from './softwareList';
import Smartphone from './smartphonList';
import style from '../../styles/device/list.module.css';

const List = () => {
    return(
        <div className={style.list}>
            <Software></Software>
        <div className={style.divider}></div>
            <Smartphone></Smartphone>
        </div>
    );
}

export default List;