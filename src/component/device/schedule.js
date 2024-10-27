import React from 'react';
import Release from './ReleaseSchedule';
import Sale from './softwareSale';
import style from '../../styles/device/Schedule.module.css';

const Schedule = () => {
    return(
        <div className={style.Schedule}>
            <Release></Release>
            <Sale></Sale>
        </div>
    );
}

export default Schedule;