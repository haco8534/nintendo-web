import React from "react";
import Style from "../../styles/pickup/pickup.module.css";
import PickUpArticle from "./article";
import pickUpDataSet from "./import";

const PickUp = () => {
    return(
        <div className={Style.container}>
            <div className={Style.topicsTitle}>
                <div className={Style.beforeTitle}>ピックアップ</div>
                <div className={Style.afterTitle}>PICKUP</div>
            </div>
            <div className={Style.articleContainer}>
                {pickUpDataSet.map((data,index) => (
                    <PickUpArticle key={index} image={data}></PickUpArticle>
                ))}
            </div>
        </div>
    );
}

export default PickUp;