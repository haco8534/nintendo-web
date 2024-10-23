import React from "react";
import Style from "../../styles/topics/topics.module.css";
import TopicsArticle from "./article";
import topicsDataSet from "./import";

const Topics = () => {
    return(
        <div className={Style.container}>
            <div className={Style.topicsTitle}>
                <div className={Style.beforeTitle}>トピックス</div>
                <div className={Style.afterTitle}>TOPICS</div>
            </div>
            <div className={Style.articleContainer}>
                {topicsDataSet.map((data,index) => (
                    <TopicsArticle key={index} image={data.image} title={data.title}></TopicsArticle>
                ))}
            </div>
            <div className={Style.articleList}>
                <p>トピックス記事一覧</p>
            </div>
        </div>
    );
}

export default Topics;