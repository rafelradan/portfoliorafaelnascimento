import React from "react";
import './Home.css'

import PhotoProfile from '../../assets/RafaelProfile.jpeg'

export default function Home() {
    return(
        <div id="home">
            <div className="title">
                <span className="span">Portfólio</span>
                <h1>FrontEnd Developer</h1>
                <p>Construindo o futuro com código.</p>
            </div>

            <div className="profile">
                <img  src={PhotoProfile} alt="Photo Profile Rafael Nascimento" />
                <span>Rafael Nascimento</span>
                <div className="bar"></div>
            </div>
        </div>
    )
}