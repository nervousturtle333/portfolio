import watermelon from "../assets/watermelon.png";
import React from "react";

function responsive_comp() {
    return(
        <div className="project-responsive">
            <div className="title-personas"> Palestine Remembered</div>
            <img src={watermelon} alt="watermelon image" className="img-fluid" object-fit='cover' width='90%'/>
        </div>
    )
}
export default responsive_comp;