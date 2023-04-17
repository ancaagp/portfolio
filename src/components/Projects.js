import React from 'react';
import trivia from '../images/trivia-gif-vf.gif';
import heart from '../images/heart-gif-vf2.gif';
import GH from '../images/gh-gif-vf4.gif';
import github_icon_32 from '../images/contact/icons8-github-32.svg';
import link_30 from '../images/contact/icons8-external-link-30.svg';
import meme from '../images/meme-gif-vf.gif';
import stock from '../images/stock-gif-vf3.gif';
import pinrecipe from '../images/pinrecipe-gif-vf1.gif';
import heart_static from '../images/static/heart-static.png';
import gh_static from '../images/static/SomeoneHelping.png';
import meme_static from '../images/static/meme-static.png';
import pinrecipe_static from '../images/static/pinrecipe.png';
import stock_static from '../images/static/stock-static.png';
import trivia_static from '../images/static/trivia-static.png';
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
                    <img className="project-video static" src={gh_static} style={{backgroundColor: "white"}}alt="groceries_helpers_gif" />
                        <img className="project-video active" src={GH} alt="groceries_helpers_gif" />
                        {/* <video className="project-video" playsInline autoPlay muted loop>
                            <source src={GH} alt="trivia_gif" />
                        </video> */}
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            Groceries Helpers
                        </div>
                        <div className="project-description">
                             Social initiative that tries to help people in need with their groceries shopping and delivery. The project aims to respond to the shortage of safe food delivery. The platform connects people in need with those willing to offer help.
                        </div>
                        <div className="project-tools">React • MongoDB • NodeJS • Express • Mongoose • APIs • Materialize</div>
                        <div className="project-links">
                            <a href="https://github.com/ancaagp/GroceriesHelpers-Frontend" target="_blank">
                                <img src={github_icon_32} />
                            </a>
                            <a href="https://github.com/ancaagp/GroceriesHelpers-Backend" target="_blank">
                                <img src={github_icon_32}/>
                            </a>
                           
                        </div>
                    </div>
                </div>


                <div className="project-container">
                    <div className="project-item">
                        <img className="project-video static" src={trivia_static} alt="trivia_static"/>
                        <img className="project-video active" src={trivia} alt="trivia_gif"/>
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            Trivia Game
                        </div>
                        <div className="project-description">
                            Trivia game based on general knowledge questions. The application connects to the Trivia APIs.
                        </div>
                        <div className="project-tools">React • Mobile responsive • APIs • CSS</div>
                        <div className="project-links">
                            <a href="https://github.com/ancaagp/trivia" target="_blank">
                                <img src={github_icon_32} />
                            </a>
                            <a href="https://incandescent-mousse-6e178b.netlify.app/" target="_blank">
                                <img src={link_30}/>
                            </a>
                            
                        </div>
                    </div>
                </div>


                <div className="project-container">
                    <div className="project-item">
                        <img className="project-video static" src={stock_static} alt="stock_static" />
                        <img className="project-video active" src={stock} alt="stock_gif" />
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
                            <a href="https://github.com/ancaagp/stock_portfolio" target="_blank">
                                <img src={github_icon_32} />
                            </a>
                            
                        </div>
                    </div>
                </div>

                <div className="project-container">
                    <div className="project-item">
                        <img className="project-video static" src={pinrecipe_static} alt="pinrecipe_static" />
                        <img className="project-video active" src={pinrecipe} alt="pinrecipe_gif" />
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            Pinrecipe
                        </div>
                        <div className="project-description">
                            Pinrecipe is a digital cookbook, where users can store their favourite recipes and also share them with friends.
                        </div>
                        <div className="project-tools">Javascript • Express • NodeJS • MongoDB • Mongoose • CSS</div>
                        <div className="project-links">
                            <a href="https://github.com/ancaagp/pinrecipe" target="_blank">
                                <img src={github_icon_32} />
                            </a>
                            
                        </div>
                    </div>
                </div>


                <div className="project-container">
                    <div className="project-item">
                        <img className="project-video static" src={heart_static} alt="heart_static"/>
                        <img className="project-video active" src={heart} alt="heart_gif"/>
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            Mini Paint
                        </div>
                        <div className="project-description">
                             A pixelated clone of paint with features such as fill.
                        </div>
                        <div className="project-tools">React</div>
                        <div className="project-links">
                            <a href="https://github.com/ancaagp/mini_paint" target="_blank">
                                <img src={github_icon_32} />
                            </a>
                        </div>
                    </div>
                </div>


                <div className="project-container">
                    <div className="project-item">
                        {/* <video className="project-video" playsInline autoPlay muted loop>
                            <source src={meme} alt="trivia_gif" />
                        </video> */}
                        <img className="project-video static" src={meme_static} alt="meme_static" />
                        <img className="project-video active" src={meme} alt="meme_gif" />
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
                            <a href="https://github.com/ancaagp/meme_generator" target="_blank">
                                <img src={github_icon_32} />
                            </a>
                            <a href="https://main--jocular-sherbet-5fa806.netlify.app/" target="_blank">
                                <img src={link_30}/>
                            </a>
                        </div>
                    </div>
                </div>


                </div>

        </div>
       
    )
}

export default Projects;