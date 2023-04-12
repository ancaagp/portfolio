import React from 'react';
import trivia from '../images/trivia_gif.mp4';
import heart from '../images/valentines.mov';
import GH from '../images/GH3.mp4';
import github_icon_32 from '../images/contact/icons8-github-32.svg';
import link_30 from '../images/contact/icons8-external-link-30.svg';
import meme from '../images/meme2-gif.gif';
import stock from '../images/stock-gif.gif';
import '../style.css';

function Projects () {

    const styles= {
        height: "28px",
        width: "28px"
    }

    return (
        <div className="main-projects-container">
            <h1 className="projects-title title">PROJECTS</h1>

            <div className="projects" id="projects">

                <div className="project-container">
                    <div className="project-item">
                        <video className="project-video" playsInline autoPlay muted loop>
                            <source src={GH} alt="trivia_gif" />
                        </video>
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            Groceries Helpers
                        </div>
                        <div className="project-description">
                             Groceries helpers is social initiative that tries to help people in need with their groceries shopping and delivery. The project aims to respond to some of the needs caused by the COVID-19 epidemic, more specifically, to the shortage of safe food delivery. The platform connects people in need with those willing to offer help.
                        </div>
                        <div className="project-tools">React • MongoDB • NodeJS • Express • Mongoose • Google Maps APIs • Materialize</div>
                        <div className="project-links">
                            <img src={github_icon_32} />
                            <img src={link_30}/>
                        </div>
                    </div>
                </div>


                <div className="project-container">
                    <div className="project-item">
                        <video className="project-video" playsInline autoPlay muted loop>
                            <source src={trivia} alt="trivia_gif" />
                        </video>
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            Trivia Game
                        </div>
                        <div className="project-description">
                            General knowledge game based on Trivia APIs
                        </div>
                        <div className="project-tools">React • Mobile responsive • APIs • CSS</div>
                        <div className="project-links">
                            <img src={github_icon_32} />
                            <img src={link_30}/>
                        </div>
                    </div>
                </div>


                <div className="project-container">
                    <div className="project-item">
                        <img className="project-video" src={stock} alt="stock_gif" />
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            Stock Portfolio
                        </div>
                        <div className="project-description">
                            A web application via which you can manage portfolios of stocks. The app allows you to check real stocks actual prices and portfolios values, and also to buy and sell  stocks by querying IEX for stocks prices. Built as part of the Harvard's CS50 course.
                        </div>
                        <div className="project-tools">Python • Flask • SQLite • APIs </div>
                        <div className="project-links">
                            <img src={github_icon_32} />
                            <img src={link_30}/>
                        </div>
                    </div>
                </div>


                <div className="project-container">
                    <div className="project-item">
                        <video className="project-video" playsInline autoPlay muted loop>
                            <source src={heart} alt="trivia_gif" />
                        </video>
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            Mini Paint
                        </div>
                        <div className="project-description">
                             A pixelated clone of paint with features such as fill
                        </div>
                        <div className="project-tools">React • Mobile responsive • Vanilla CSS</div>
                        <div className="project-links">
                            <img src={github_icon_32} />
                            <img src={link_30}/>
                        </div>
                    </div>
                </div>


                <div className="project-container">
                    <div className="project-item">
                        {/* <video className="project-video" playsInline autoPlay muted loop>
                            <source src={meme} alt="trivia_gif" />
                        </video> */}
                        <img className="project-video" src={meme} alt="stock_gif" />
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            Meme Generator
                        </div>
                        <div className="project-description">
                            Web application that generates memes with random images and personalised text
                        </div>
                        <div className="project-tools">React • APIs • CSS</div>
                        <div className="project-links">
                            <img src={github_icon_32} />
                            <img src={link_30}/>
                        </div>
                    </div>
                </div>


                </div>

        </div>
       
    )
}

export default Projects;