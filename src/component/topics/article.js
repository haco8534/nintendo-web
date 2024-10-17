import React from 'react';
import Style from '../../styles/topics/article.module.css'

const Article = (props) => {
    return(
        <div className={Style.container}>
            <img className={Style.image} src={props.image} alt="記事サムネイル"></img>
            <div className={Style.title}>{props.title}</div>
            <div className={Style.date}>2024.10.16</div>
        </div>
    );
}

export default Article;