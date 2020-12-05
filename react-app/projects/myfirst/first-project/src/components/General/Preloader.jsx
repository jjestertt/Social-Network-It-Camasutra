import preloader from "../../assets/image/preloader.svg";
import React from "react";
import style from "./Preloader.module.css"

const Preloader = (props) => {
    return (
        <div className="preloader">
            <img src={preloader} className={style.imgPreloader} alt=""/>
        </div>
    );
}
export default Preloader;
