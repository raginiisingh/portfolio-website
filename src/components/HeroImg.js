import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/backgroundf.jpg"
import { Link } from "react-router-dom";
import  FeatureImg  from "../assets/feature-image.png"



const HeroImg = () => {
    return <div className="hero">
        <div className="feature">
            <img className="hover_effect" src={FeatureImg} alt="FeatureImage" />
        </div>
        <div className="mask1">
           
        </div>
        
        <div className="content">
            <h4 className="about">Hi, so glad to see you here!</h4>
            <h1 className="intro">I AM RAGINI SINGH</h1>
            <div className="about"><h3 > A React developer, getting better every day.   </h3> </div>
            <div className="buttons">
                
                <a href="./documents/RAGINI SINGH.pdf" download>
        <button className="btn btn-light" >View Resume</button>
      </a>
            </div>

        </div>
    </div>;

};
export default HeroImg;