import React from "react";
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'



const Footer =() =>{
    return(
        <footer>
            <a href="he" className="footer_logo">ROSHAN</a>

            <ul className="permalinks">
                <li> <a href="#header">Home</a></li>
                <li> <a href="#about">About</a></li>
                <li> <a href="#experience">Experience</a></li>
                <li> <a href="#services">Services</a></li>
                <li> <a href="#portfolio">Portfolio</a></li>
                <li> <a href="#Contact">Contact</a></li>

            </ul>

            <div className="footer_socials">
                <a href="https://linkedin.com"><BsLinkedin/></a>
                <a href="https://instagram.com"><BsInstagram/></a>
                <a href="https://twitter.com"><BsTwitter/></a>

            </div>
            <div className="footer_copyright">
                <small>&copy; Developed by Roshan Pokhrel. All rights reserved</small>

            </div>

        </footer>
    );
}
export default Footer