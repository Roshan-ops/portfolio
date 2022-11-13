import React from "react";
import './contact.css'
import {MdEmail} from 'react-icons/md'
import{BsInstagram} from 'react-icons/bs'
import{BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact =() =>{
    const notify = () => toast("Message Sent Successfully!");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kpod7z6', 'template_y5lr365', form.current, 'nJjfuWEsj9BfPuzP5')
        
        notify();
        e.target.reset()
          
      };
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                    <MdEmail className="contact_option-icon"/>
                    {/* <h4>Email</h4> */}
                    <h5>pokhrekroshan661@gmail.com</h5>
                    <a href="mailto:pokhrelroshan661@gmail.com" target='blank'>send a message</a>
                    </article>

                    <article className="contact_option">
                    <BsInstagram className="contact_option-icon"/>
                    {/* <h4>Instagram</h4> */}
                    <h5>Roshan Pokhrel</h5>
                    <a href="https://www.instagram.com/pokhrel_roshann/?hl=en" target='blank'>Follow Me</a>
                    </article>

                    <article className="contact_option">
                    <BsLinkedin className="contact_option-icon"/>
                    {/* <h4>Linkedin</h4> */}
                    <h5>roshan-pokhrel</h5>
                    <a href="https://www.linkedin.com/in/roshan-pokhrel-/" target='blank'>Connect to Linkedin</a>
                    </article>
                </div>
                {/* EndOF Contact Options */}
                <form ref={form} onSubmit ={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea type="message" name="message" rows="8" placeholder="Your Message" required ></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
                <ToastContainer />
            </div>
        </section>
    )
}
export default Contact