import React from "react";
import Style from "../../styles/topics/topics.module.css";
import Article from "./article";
import dataSet from "./import";

const Topics = () => {
    return(
        <div className={Style.container}>
            <div className={Style.topicsTitle}>
                <div className={Style.beforeTitle}>トピックス</div>
                <div className={Style.afterTitle}>TOPICS</div>
            </div>
            <div className={Style.articleContainer}>
                {dataSet.map((data) => (
                    <Article image={data.image} title={data.title}></Article>
                ))}
            </div>
        </div>
    );
}

export default Topics;