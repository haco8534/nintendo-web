import HeaderSearch from "./elements/header.search.js";
import HeaderCart from "./elements/header.cart.js";
import HeaderLogin from "./elements/header.login.js";
import style from "../../styles/header/header.module.css";
import HeaderHontai from "./elements/header.hontai.js";
import HeaderGamesoft from "./elements/header.gamesoft.js";
import HeaderTopics from "./elements/header.topics.js";
import Character from "./elements/character.header.js";
import Support from "./elements/support.header.js";
import SearchContent from "./contents/search.content.js";
import { useState } from "react";

const Header = () => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div className={style.container}>
            <div>
                <div 
                    className={style.headerLeft}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <HeaderHontai />
                    <HeaderGamesoft />
                    <HeaderTopics />
                    <Character />
                    <Support />
                </div>
                <div className={style.headerRight}>
                    <HeaderSearch />
                    <HeaderCart />
                    <HeaderLogin />
                </div>
                <div className={`${style.content} ${isHovered ? style.headerLeftHovered : ''}`}>
                    <SearchContent />
                </div>
            </div>
        </div>
    );
}

export default Header;
