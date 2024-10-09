import HeaderSearch from "./header.search.js";
import HeaderCart from "./header.cart.js";
import HeaderLogin from "./header.login.js";
import style from "../styles/header.module.css";
import HeaderHontai from "./header.hontai.js";
import HeaderGamesoft from "./header.gamesoft.js"
import HeaderTopics from "./header.topics.js"
import Character from "./character.header.js"
import Support from "./support.header.js"

const Header = () => {
    return (
        <div className = {style.headerLeft}>
            <HeaderHontai></HeaderHontai>
            <HeaderGamesoft></HeaderGamesoft>
            <HeaderTopics></HeaderTopics>
            <Character></Character>
            <Support></Support>
                <div className = {style.headerRight}>
                    <HeaderSearch></HeaderSearch> 
                    <HeaderCart></HeaderCart>
                    <HeaderLogin></HeaderLogin>                
                </div>
        </div>
    );
}

export default Header;