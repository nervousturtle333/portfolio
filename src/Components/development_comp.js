import React from 'react';
import { Link } from 'react-router-dom';
import library from "../assets/library-03.png";

function development_comp(){
    return (
        <div className="project-library">
            <div className="title-library"> Library</div>
            <Link to="/Dashboard"> Dashboard </Link>
            <img src={library} alt="library image" className="img-fluid" object-fit='cover' width='60%'/>
        </div>
    )

}
export default development_comp;