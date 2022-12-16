import React from "react";
import personas from "../assets/personas.png"

function personas_comp() {
    return(
        <div className="project-personas">
            <div className="title-personas"> Studying Water Fountains</div>
            <img src={personas} alt="personas_comp image" className="img-fluid" object-fit='cover' width='60%'/>
        </div>
    )
}
export default personas_comp;