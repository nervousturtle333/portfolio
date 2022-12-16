import map from "../palestinemap.gif";
import lifeat from "../assets/lifeat.png";
import library from "../assets/library-03.png";
import watermelon from "../assets/watermelon.png";
import React from "react";
import iterative_comp from "../Components/iterative_comp";
import development_comp from "../Components/development_comp";
import responsive_comp from "../Components/responsive_comp";
import personas_comp from "../Components/personas_comp";
import { Link } from "react-router-dom";
import personas from "../assets/personas.png";

function Home() {
    return(
        <appbody>
            <nav>
                <div className="portfolio-title">
                    Nervous Turtle's Portfolio
                </div>
                <div className="portfolio-text">
                    Hello! I am a front-end developer whose work revolves around accessibility, inclusion, and
                    intention.
                    I believe in projects that narrate a story, whatever it may be.
                </div>
                <img src={map} width="100%" alt="This will display an animated GIF map"/>
            </nav>

            <div className="project-iterative">
                <div className="title-library"> LifeAt</div>
                <Link to={"/iterative"}>
                    <img src={lifeat} alt="lifeat image" className="img-fluid" object-fit='cover' width='60%'/>
                </Link>
            </div>

            <div className="project-library">
                <div className="title-library"> Library</div>
                <Link to={"/development"}>
                    <img src={library} alt="library image" className="img-fluid" object-fit='cover' width='60%'/>
                </Link>
            </div>


            <div className="project-responsive">
                <div className="title-personas"> Palestine Remembered</div>
                <Link to={"/responsive"}>
                    <img src={watermelon} alt="watermelon image" className="img-fluid" object-fit='cover' width='90%'/>
                </Link>
            </div>


            <div className="project-personas">
                <div className="title-personas"> Studying Water Fountains</div>
                <Link to={"/personas"}>
                    <img src={personas} alt="personas_comp image" className="img-fluid" object-fit='cover' width='60%'/>
                </Link>
            </div>


            <div className="colorblock-one"></div>
            <div className="colorblock-two"></div>
            <div className="colorblock-three"></div>

            <footer> hello</footer>
        </appbody>
    )
}

export default Home;