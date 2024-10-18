import React, { useRef, useState } from "react";
import Style from "../../styles/gamesoft/slider.module.css"

const Slider = () => {

    const [startPlace, setStart] = useState(0); //ドラッグの開始x座標
    const [movePlace, setMove] = useState(0);   //移動後のx座標
    const [isDragged, setDragged] = useState(false); //ドッラグ状態の有無
    const [sliderLeft, setLeft] = useState(0); //スライダーのleft
    
    const sliderRef = useRef(null); //スライダーのref

    const MAX_SLIDE_LEFT = -10; //スライドバーの左端
    const MAX_SLIDE_RIGHT = 320; //スライドバーの右端

    //スライダードラッグ時
    function startDrag(event){
        setLeft(parseInt(getComputedStyle(sliderRef.current,0).left));
        setStart(event.clientX);
        setDragged(true);
    }

    //マウス移動時のスライダー座標
    function calc_X(event){
        if(isDragged){
            const diff = event.clientX - startPlace;
            let sliderPlace = sliderLeft + diff;

            if(sliderPlace <= MAX_SLIDE_LEFT) sliderPlace = MAX_SLIDE_LEFT;
            else if (sliderPlace >= MAX_SLIDE_RIGHT) sliderPlace = MAX_SLIDE_RIGHT;
            setMove(sliderPlace);
        }       
    }
    return(
        <div 
            className={Style.container}
            onMouseMove={calc_X}
            onMouseUp={()=>setDragged(false)}
        >
            <div className={Style.slideBar}>
                <div className={Style.pointArrow} style={{left: `${movePlace + 25}px`}}></div>
                <div 
                    className={Style.slider}
                    onMouseDown={startDrag}
                    style={{left: `${movePlace}px`}}
                    ref={sliderRef}
                >
                    先週～
                </div>
            </div>
        </div>
    )
}

export default Slider;