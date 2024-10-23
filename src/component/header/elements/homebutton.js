import React from "react";
import NintendoLogo from "../image/NintendoBoxLogo.webp"
import style from "../../../styles/header/header.module.css"

const HomeButton = () => {
    return(
        <a>
            <img src = {NintendoLogo} className = {style.HomeButton}></img>
        </a>
    )
} 

export default HomeButton;
