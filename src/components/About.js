import React from 'react';
import anca_img from '../images/aa_li.jpeg';
import '../style.css';

function About () {
    return (

        <div className="about" id="about"> 
            <h1 className="about-title title">ABOUT</h1>
            <div className="bio">
                <div className="about-me">
                    <div className="about-me">
                        <p>
                        Marketer turned software engineer, I enjoy building user centric products and solving complex customer problems. My background lies at the intersection of marketing, data and tech. After working in tech teams as Analyst and Product Manager I decided to pursue my passion for technology and transition into a career as a software engineer. 
                        </p>
                 
                        <br />
                        <p>
                        Thanks to my marketing background, I bring a unique perspective to my role as a software engineer. I understand the importance of user experience and the value of creating products that meet customer needs. My previous roles also help me to communicate effectively with other members of the development team and to understand the overall goals of a project.                         
                        <br />
                        I am an idea generator, who always creates a positive atmosphere and who takes initiative to turn challenges into opportunities. 
                        </p>

                        <br/>
                        <p>
                        When I’m not in front of my laptop, I like to be outdoors and enjoy the nature while running, biking or hiking the trails of California.
                        </p>
                    </div>
                </div>
                <div className="profile-image-container">
                    <img className= "profile-image" src={anca_img} alt="profile image"/>
                </div>
            </div>

            {/* adding line divider between questions */}
            <hr className="line-break"
                style={{
                    background: '#283618',
                    height: '1px',
                    opacity: '50%',
                    border: 'none',
                    margin: '5vw 20vw'
                }}
            />


            <div className="skills-edu-section">
                <div className="skills">
                    <h1 className="skills-title title">SKILLS</h1>
                    <ul className="skills-list">
                        <li className="skills-item">Javascript</li>
                        <li className="skills-item">React</li>
                        <li className="skills-item">NodeJS</li>
                        <li className="skills-item">Flask</li>
                        <li className="skills-item">MongoDB</li>
                        <li className="skills-item">AJAX</li>
                        <li className="skills-item">Express</li>
                        <li className="skills-item">Python</li>
                        <li className="skills-item">CSS</li>
                        <li className="skills-item">SQL</li>
                        <li className="skills-item">QlikSense</li>
                        <li className="skills-item">Google Analytics</li>
                        <li className="skills-item">Adobe Analytics</li>
                        <li className="skills-item">Product management</li>
                    </ul>
                </div>
                <div className="education">
                    <h1 className="edu-title title">EDUCATION</h1>
                    <ul className="edu-list">
                        <li>Full-Stack Software Engineering - General Assembly, San Francisco</li>
                        <li>Big Data Analytics - Arcada University of Applied Science, Helsinki</li>
                        <li>MSc in International Management - CEMS MIM / HEC Paris, Helsinki/ Paris</li>
                        <li>MSc in Marketing - Aalto University, Helsinki</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default About;