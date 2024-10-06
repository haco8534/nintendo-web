import HeaderSearch from "./header.search.js";
import HeaderCart from "./header.cart.js";
import HeaderLogin from "./header.login.js";
import style from "../styles/header.module.css"

const Header = () => {
    return (
        <div className = {style.header}>
            <HeaderSearch></HeaderSearch> 
            <HeaderCart></HeaderCart>
            <HeaderLogin></HeaderLogin>                
        </div>
    );
}

export default Header;