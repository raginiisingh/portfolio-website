import "./HeroImg3Styles.css";
import React from 'react'
import ContactImg from "../assets/backgroundf.jpg"


const HeroImg3 = (props) => {
    return <div className="hero">
        <div className="mask">
           
        </div>
        <div className="content">
            
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
            
            

        </div>
    </div>;

};
export default HeroImg3;
