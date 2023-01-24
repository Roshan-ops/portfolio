import React from "react";
import './about.css'
import Me from '../../assets/hello.png'
import {BsAwardFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {BsFillFolderFill} from 'react-icons/bs'

const About =() =>{
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
               <div className="about_me">
                <div className="about_me-image">
                    <img src={Me} alt="about img" />

                </div>
                </div> 
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <BsAwardFill className="about_icon"/>
                            <h5>Experience</h5>
                            <small>2 months + working</small>
                        </article>

                        <article className="about_card">
                            <FaUserAlt className="about_icon"/>
                            <h5>Clients</h5>
                            <small>5+ in Nepal</small>
                        </article>

                        <article className="about_card">
                            <BsFillFolderFill className="about_icon"/>
                            <h5>Projects</h5>
                            <small>5+ projects completed</small>
                        </article>
                    </div>
                    <p>
                    I'm a computer science student in my last year at Herald College in Kathmandu. 
                    I work on various front-end projects, have a strong interest in javascript, and 
                    spend my leisure time learning node.js.
                     I have a strong desire to learn new things and create new things.     
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}
export default About