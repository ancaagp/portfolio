import React from 'react';
import anca_img from '../images/aa_li.jpeg';
import '../style.css';

function About () {
    return (

        <div className="about" id="about"> 
            <div className="bio">
                <div className="about-me">
                        <h1 className="about-title title">ABOUT</h1>
                        <p>I want to help companies solve customer problems and build user centric products by combining my background in marketing and management with my skills in software development and big data analytics. My previous roles in multiple industries taught me to be a fast learner and adapt easily to new environments. I am an idea generator, who always creates a positive atmosphere and who takes initiative to turn challenges into opportunities. 
                            <br />
                            <ol>
                            Guided by the CEMS values:
                       <li>1. The pursuit of excellence with high standards of performance and ethical conduct;</li> 
                       <li>2. Understanding and drawing upon cultural diversity with respect and empathy;</li> 
                       <li>3. Professional responsibility and accountability in relation to society as a whole.</li> 
                        
                        
                            </ol>

                        </p>
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
                    {/* <ul className="skills-empty">Some companies and organisations I worked with:
                        <li>KONE</li>
                        <li>DDB Paris</li>
                        <li>Aalto University Executive Education</li>
                        <li>PharmaSynth</li>
                        <li>AIESEC</li>
                    
                    </ul> */}
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