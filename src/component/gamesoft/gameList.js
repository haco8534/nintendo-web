import React, { useState } from "react";
import GameSoft from "./gamesoft";
import Style from "../../styles/gamesoft/gamelist.module.css";
import Slider from "./slider";
import gameDataSet from "./import";

const GameList = () => {

    const [gameListPosition,setPosition] = useState(0);

    function handleSliderChange(newPosition){
        //ウィンドウに最適な移動速度
        setPosition((newPosition+10) * -22);
    }

    return(
        <div className={Style.app}>
            <div className={Style.gamesoftTitle}>
                <div className={Style.beforeTitle}>ゲームソフト</div>
                <div className={Style.afterTitle}>SOFTWARE</div>
            </div>
            <div className={Style.container}>
                <div className={Style.gameList} style={{left:`${gameListPosition}px`}}>
                    {gameDataSet.map((item,index) => (
                        <GameSoft
                            key={index}
                            image={item.image}
                            title={item.title}
                            age={item.age}
                        >
                        </GameSoft>
                    ))}
                </div>
            </div>
            <div className={Style.slider}>
                <Slider onChange={handleSliderChange}></Slider>
            </div>
        </div>
    );
}

export default GameList;