import React from 'react'
import "./HeroImg4Styles.css";
import ProfileImg from "../assets/Ragini.jpeg"
import { FaJs, FaJava, FaReact, FaNodeJs,FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiMysql, SiMongodb, SiBootstrap } from "react-icons/si"

const HeroImg4 = () => {
  return (
     
     <div className='container'>
      <div className='box'>
       <div className='box-row'>
      <div className='box-cell box1'>
      
      <img  src={ProfileImg} alt="ProfileImage" />
      </div>
      <div className='box-cell box2'>
      <h1> ABOUT ME</h1>
      <p> I am Ragini Singh, a final year student of Electronics and communication engineering and a budding software developer with an understanding of web development. I am familiar with the basic principles of computer science , such as Operating systems, OOPS, Database Management Systems and computer networks .  I have built projects using ReactJS, Node.js and MySQL. I am interested and open to interviewing for intern/full-time roles in the field of software engineering. </p>
      <div className='Skills'>
      <h4 >MY SKILLS </h4>
       <i><FaJs size={50} style={{color: "#fff" }}  /> </i>
        
       <i><FaJava size={50} style={{color:"#fff"}}  />
        </i>
        <i><FaReact size={50} style={{color:"#fff" }} /></i>
        <i><SiMysql size={50} style={{color:"#fff" }} /></i>
        <i><SiMongodb size={50} style={{color:"#fff" }} /></i>
        <i><SiBootstrap size={50} style={{color:"#fff"}} /> </i>
        <i><FaNodeJs size={50} style={{color:"#fff"}} /></i>
        <i><FaCss3Alt size={50} style={{color:"#fff"}} /></i>
        <i><FaHtml5 size={50} style={{color:"#fff"}} /></i>
      </div>
      
      </div>
     </div>
     </div>
     </div>
     
   
  )
}

export default HeroImg4