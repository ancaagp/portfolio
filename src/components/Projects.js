import React from 'react';
import trivia from '../images/trivia_gif.mp4';
import heart from '../images/valentines.mov';
import GH from '../images/GH3.mp4';
import github_icon_32 from '../images/contact/icons8-github-32.svg';
import link_30 from '../images/contact/icons8-external-link-30.svg';
import meme from '../images/meme_gen_3.mp4';
import '../style.css';

function Projects () {

    const styles= {
        height: "28px",
        width: "28px"
    }

    return (
        <div className="main-projects-container">
            <h1 className="projects-title">PROJECTS</h1>

            <div className="projects" id="projects">

                <div className="project-container">
                    <div className="project-item">
                        <video className="project-video" playsInline autoPlay muted loop>
                            <source src={trivia} alt="trivia_gif" />
                        </video>
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            TRIVIA GAME
                        </div>
                        <div className="project-description">
                            General knowledge game based on Trivia APIs
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
                        <video className="project-video" playsInline autoPlay muted loop>
                            <source src={heart} alt="trivia_gif" />
                        </video>
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            TRIVIA GAME
                        </div>
                        <div className="project-description">
                            General knowledge game based on Trivia APIs
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
                        <video className="project-video" playsInline autoPlay muted loop>
                            <source src={GH} alt="trivia_gif" />
                        </video>
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            TRIVIA GAME
                        </div>
                        <div className="project-description">
                            General knowledge game based on Trivia APIs
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
                        <video className="project-video" playsInline autoPlay muted loop>
                            <source src={meme} alt="trivia_gif" />
                        </video>
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            TRIVIA GAME
                        </div>
                        <div className="project-description">
                            General knowledge game based on Trivia APIs
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
                        <video className="project-video" playsInline autoPlay muted loop>
                            <source src={trivia} alt="trivia_gif" />
                        </video>
                    </div>
                    <div className="project-container">
                        <div className="project-name">
                            TRIVIA GAME
                        </div>
                        <div className="project-description">
                            General knowledge game based on Trivia APIs
                        </div>
                        <div className="project-tools">React • Mobile responsive • Vanilla CSS</div>
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