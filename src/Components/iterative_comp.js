import lifeat from "../assets/lifeat.png";
import React from "react";
import '../App.css';
function iterative_comp(){
    return (
        <div className="project-iterative">
            <div className="title-library"> LifeAt</div>
            <img src={lifeat} alt="lifeat image" className="img-fluid" object-fit='cover' width='60%'/>
        </div>
    )
}
export default iterative_comp;