import preloader from "../../assets/image/preloader.svg";
import React from "react";

const Preloader = (props) => {
    return (
        <div className="preloader">
            <img src={preloader} style={ {position: 'absolute', top: '50%', left: '50%', zIndex: '1'}} alt=""/>
        </div>
    );
}
export default Preloader;
