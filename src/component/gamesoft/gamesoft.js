import React from 'react';
import Style from '../../styles/gamesoft/gamesoft.module.css'

const GameSoft = (props) => {
    return(
        <div className={Style.container}>
            <img className={Style.image} src={props.image} alt="記事サムネイル"></img>
            <div className={Style.hard}>Nintendo Switch</div>
            <div className={Style.title}>{props.title}</div>
            <img className={Style.age} src="https://store-jp.nintendo.com/on/demandware.static/-/Sites-all-master-catalog/ja_JP/dwead2f02e/ratings/CERO/rating/1.svg" alt="対象年齢"></img>
            <div className={Style.studio}>任天堂</div>
        </div>
    );
}

export default GameSoft;