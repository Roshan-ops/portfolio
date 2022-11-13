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
        title: 'project light',
        github:"https://github.com",
        demo: 'https://www.youtube.com/watch?v=jZpMvFKjH2g'
    },
    {
        id: 2,
        image: IMG2,
        title: 'project mars',
        github:"https://github.com",
        demo:'https://www.youtube.com/watch?v=112H-vY4Wdo'
    },
    {
        id: 3,
        image: IMG3,
        title: 'project earth',
        github:"https://github.com",
        demo:'https://www.tiktok.com/@danbanbam/video/7153751707057655086?is_from_webapp=1&sender_device=pc&web_id=7136282504583464449'
    },
    {
        id: 4,
        image: IMG4,
        title: 'project thunder',
        github:"https://github.com",
        demo:'https://www.youtube.com/watch?v=Xo6w5QVrABc'
    },
    {
        id: 5,
        image: IMG5,
        title: 'project venus',
        github:"https://github.com",
        demo:'https://www.youtube.com/watch?v=jZpMvFKjH2g'
    },
    {
        id: 6,
        image: IMG6,
        title: 'project solarsyatem',
        github:"https://github.com",
        demo:'https://www.youtube.com/watch?v=jZpMvFKjH2g'
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