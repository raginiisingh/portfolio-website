import "./HeroImg2Styles.css";
import React from 'react'
import ProjectImg from "../assets/backgroundf.jpg"


const HeroImg2 = (props) => {
    return <div className="hero">
        <div className="mask">
           
        </div>
        <div className="content">
            
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
            
            

        </div>
    </div>;

};
export default HeroImg2;