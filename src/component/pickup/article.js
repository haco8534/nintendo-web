import React from 'react';
import Style from '../../styles/pickup/article.module.css'

const PickUpArticle = (props) => {
    return(
        <div className={Style.container}>
            <img className={Style.image} src={props.image} alt="記事サムネイル"></img>
        </div>
    );
}

export default PickUpArticle;