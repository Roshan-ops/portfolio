import React from "react";
import './experience.css'
import {BsPatchCheck} from 'react-icons/bs'

const Experience =() =>{
    return(
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheck className='experience_details-icon'/>
                            <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsPatchCheck className='experience_details-icon'/>
                           <div>
                           <h4>CSS</h4>
                           <small className="text-light">Experienced</small>
                           </div>
                        </article>

                        <article className="experience_details">
                            <BsPatchCheck className='experience_details-icon'/>
                            <div>
                            <h4>Javascript</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsPatchCheck className='experience_details-icon' />
                            <div>
                            <h4>Bootstrap</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsPatchCheck className='experience_details-icon'/>
                            <div>
                            <h4>UI/UX</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* End of FRONTEND   */}


                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheck className='experience_details-icon'/>
                            <div>
                            <h4>Django</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsPatchCheck className='experience_details-icon'/>
                            <div>
                            <h4>MongoDB</h4>
                            <small className="text-light">Experienced</small>
                            </div>

                        </article>

                        <article className="experience_details">
                            <BsPatchCheck className='experience_details-icon'/>
                            <div>
                            <h4>Node JS</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsPatchCheck className='experience_details-icon'/>
                            <div>
                            <h4>MYSQL</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsPatchCheck className='experience_details-icon'/>
                            <div>   
                            <h4>PHP</h4>
                            <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>


                </div>
            </div>
        </section>
    );
}
export default Experience