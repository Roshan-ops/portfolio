import React from "react";
import './header.css'
import CTA from "./CTA.jsx";
import ME from '../../assets/roshan.png'
import HeaderSocial from "./HeaderSocials";

const Header =() =>{
    return(
        <header id="header">
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Er.Roshan Pokhrel</h1>
                <h5 className="text-light"> Front-end Developer</h5>
                <CTA/>
                <HeaderSocial/>

                <div className="me">
                    <img src={ME} alt="me" />

                </div>
                <a href="#contact" className="scroll-down">Scroll Down</a>
            </div>
        </header>
    );
}
export default Header