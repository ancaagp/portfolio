import React from 'react';
import anca_img from '../images/aa_li.jpeg';
import '../style.css';

function About () {
    return (

        <div className="about" id="about"> 
            <div className="bio">
                <div className="about-me">
                        <h1>ABOUT</h1>
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
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
                    margin: '3vw 20vw'
                }}
            />


            <div className="skills-edu-section">
                <div className="skills">
                    <h1 className="skills-title">SKILLS</h1>
                    <ul className="skills-list">
                        <li className="skills-item">Javascript</li>
                        <li className="skills-item">React</li>
                        <li className="skills-item">NodeJS</li>
                        <li className="skills-item">Python</li>
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
                    <h1 className="edu-title">EDUCATION</h1>
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