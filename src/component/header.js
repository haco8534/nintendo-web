import HeaderCart from "./header.cart.js";
import HeaderLogin from "./header.login.js";
import style from "../styles/header.module.css"

const Header = () => {
    return (
        <div className={style.app}>
            <div className = {style.header}>
                <HeaderCart></HeaderCart>
                <HeaderLogin></HeaderLogin> 
            </div>
            <div className={style.header}>
            
            </div> 
        </div>
    );
}

export default Header;