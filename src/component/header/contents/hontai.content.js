import React from "react";
import NintendoLogo from "../image/NintendoBoxLogo.webp"
import style from "../../../styles/header/header.module.css"

const HontaiContent = () => {
    return(
        <img src = {NintendoLogo} className = {style.HomeButton}></img>
    );
};

export default HontaiContent;