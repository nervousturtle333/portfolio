import './App.css';
import map from './palestinemap.gif'
import library from './assets/library-03.png'
import personas_comp from './assets/personas.png'
import lifeat from './assets/lifeat.png'
import watermelon from './assets/watermelon.png'
// https://stackoverflow.com/questions/63979705/how-to-link-to-another-page-in-react
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Development from "./pages/development";
import Iterative from "./pages/iterative";
import Personas from "./pages/personas";
import Responsive from "./pages/responsive";
import Home from "./pages/home"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route index element={<Home />} />
                <Route path="/development" element={<Development />} />
                <Route path="/iterative" element={<Iterative />} />
                <Route path="/personas" element={<Personas />} />
                <Route path="/responsive" element={<Responsive />} />
            </Routes>
        </BrowserRouter>

        );
}

export default App;
