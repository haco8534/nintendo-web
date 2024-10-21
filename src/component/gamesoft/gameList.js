import React, { useEffect, useState } from "react";
import GameSoft from "./gamesoft";
import Style from "../../styles/gamesoft/gamelist.module.css";
import Slider from "./slider";

const GameList = () => {

    const [gamesoftPlace, setPlace] = useState([]);
    
    useEffect(()=>{
        setPlace([0])
        let placeList = []
        for(let i=0;i<28;i++){
            placeList.push(i*100)
        }
        setPlace(placeList)

    },[])

    return(
        <div className={Style.container}>
            <div className={Style.gameList}>
                {gamesoftPlace.map((item) => (
                    <GameSoft
                        key={item*0.01}
                        className={Style.gamesoft}
                        style={{left:`${item}px`}}
                    >
                    </GameSoft>
                ))}
            </div>
            <Slider></Slider>
        </div>
    );
}

export default GameList;