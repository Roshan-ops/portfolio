import React from "react";
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =  [
    {
        id: 1,
        image: IMG1,
        title: 'job portal',
        github:"https://github.com/Roshan-ops/Job-Portal",
        demo: ''
    },
    {
        id: 2,
        image: IMG2,
        title: 'Weather App',
        github:"https://github.com/Roshan-ops/Weather-check",
        demo:''
    },
    {
        id: 3,
        image: IMG3,
        title: 'QR-Scanner',
        github:"https://github.com/Roshan-ops/qrScanner",
        demo:''
    },
    {
        id: 4,
        image: IMG4,
        title: 'Event Management',
        github:"https://github.com/Roshan-ops/Event-Management",
        demo:''
    },
    {
        id: 5,
        image: IMG5,
        title: 'Todo App',
        github:"https://github.com/Roshan-ops/To-do_app",
        demo:''
    },
    {
        id: 6,
        image: IMG6,
        title: 'portfolio',
        github:"https://github.com/Roshan-ops/portfolio",
        demo:''
    }
]

const Portfolio =() =>{
    return(
        <section id="portfolio">
            <h5> My Recent Work</h5>
            <h2>portfolio</h2>

            <div className="container portfolio_container">
                {
                    data.map(({id, image,title,github,demo}) => {
                        return(
                            <article key={id} className="portfolio_item">
                            <div className="portfolio_item-image">
                                <img src={IMG1} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio_item-cta">
                            <a href={github} className="btn" target='blank'>Github</a>
                            <a href={demo} className="btn btn-primary" target='blank'>Live Demo</a>
                            </div>
                        </article>               
                        )
                    })
                }


            </div>
        </section>
    );
}
export default Portfolio