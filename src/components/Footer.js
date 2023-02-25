import "./FooterStyles.css"

import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa"
import { FiMail } from "react-icons/fi"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-basic">
          <div className="social">
            <a href="https://www.linkedin.com/in/ragini-singh-3a171b199/" class="footer__icon">
            <i class='bx bxl-linkedin' ></i>
            <FaLinkedin size={20} style={{color: "#fff"}} />
            </a>
            <a href="https://github.com/raginiisingh" class="footer__icon">
            <FaGithub size={20} style={{color: "#fff"}}/>
            <i class='bx bxl-github' ></i>
            </a>
            <a href="https://twitter.com/rragini_" class="footer__icon">
            <FaTwitter size={20} style={{color: "#fff"}}/>
            <i class='bx bxl-twitter' ></i>
            </a>
            <a href="mailto:sragini2k@gmail.com" class="footer__icon">
            <FiMail size={20} style={{color: "#fff"}}/>
            <i class='bx bxl-email' ></i>
            </a>
            
             
          </div>
          
            <p class="copyright">Designed and developed by Ragini </p>
        
          
          
           
        </div>
    </div>
  )
}

export default Footer