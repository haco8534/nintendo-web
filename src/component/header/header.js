import Search from "./elements/search.js";
import Cart from "./elements/cart.js";
import Login from "./elements/login.js";
import style from "../../styles/header/header.module.css";
import Hontai from "./elements/hontai.js";
import Gamesoft from "./elements/gamesoft.js";
import Topics from "./elements/topics.js";
import Character from "./elements/character.js";
import Support from "./elements/support.js";
import SearchContent from "./contents/search.content.js";
import { useState } from "react";
import HomeButton from "./elements/homebutton.js";
import HontaiContent from "./contents/hontai.content.js";
import GameSoftContent from "./contents/gamesoft.content.js";
import TopicsContent from "./contents/topics.content.js";
import CharacterContent from "./contents/character.content.js";

const Header = () => {
    const [isHontaiHovered, setHontaiHovered] = useState(false);
    const [isGameSoftHovered, setGameSoftHovered] = useState(false);
    const [isSearchHovered, setSearchHovered] = useState(false);
    const [isTopicsHovered, setTopicsHovered] = useState(false);
    const [isCharacterHovered, setCharacterHovered] = useState(false);

    return (
        <div className={style.header}>
            <div className={style.container}>
                <HomeButton />
                <div className={style.headerLeft}> 
                    <div                     
                            onMouseEnter={() => setHontaiHovered(true)}
                            onMouseLeave={() => setHontaiHovered(false)}
                        >
                        <Hontai />
                    </div>
                    <div                     
                            onMouseEnter={() => setGameSoftHovered(true)}
                            onMouseLeave={() => setGameSoftHovered(false)}
                        >
                        <Gamesoft />     
                    </div>
                    <div                     
                            onMouseEnter={() => setTopicsHovered(true)}
                            onMouseLeave={() => setTopicsHovered(false)}
                        >
                        <Topics />
                    </div>
                    <div
                            onMouseEnter={() => setCharacterHovered(true)}
                            onMouseLeave={() => setCharacterHovered(false)}
                        >
                        <Character />
                    </div>
                        <Support />
                </div>
                <div className={style.headerRight}>
                    <div                     
                        onMouseEnter={() => setSearchHovered(true)}
                        onMouseLeave={() => setSearchHovered(false)}
                    >
                        <Search />
                    </div>
                    <Cart />
                    <Login />
                </div>
            </div>
            <div className = {`${style.hontaicontent} ${isHontaiHovered ? style.headerhontaiHovered : ''}`}>
                <HontaiContent />
            </div>
            <div className = {`${style.gamesoftcontent} ${isGameSoftHovered ? style.headergamesoftHovered : ''}`}>
                <GameSoftContent />
            </div>
            <div className = {`${style.topicscontent} ${isTopicsHovered ? style.headertopicsHovered : ''}`}>
                <TopicsContent />
            </div>
            <div className = {`${style.charactercontent} ${isCharacterHovered ? style.headercharacterHovered : ''}`}>
                <CharacterContent />
            </div>
            <div className={`${style.searchcontent} ${isSearchHovered ? style.headerSearchHovered : ''}`}>
                <SearchContent />
            </div>
        </div>
    );
}

export default Header;
