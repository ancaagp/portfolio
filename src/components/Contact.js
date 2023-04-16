import React from 'react';
import linkedin_26 from '../images/contact/icons8-linkedin-26.svg';
import github_icon_32 from '../images/contact/icons8-github-32.svg';
import '../style.css';

function Contact () {

    const styles= {
        height: "24px",
        width: "24px"
    }


    return (
        <div>
        <div className="contact" id="contact">

            {/* adding line divider between questions */}
            <hr className="line-break"
                style={{
                    background: '#283618',
                    height: '1px',
                    opacity: '50%',
                    border: 'none',
                    margin: '10vh 20vw'
                }}
            />

            <div className="contact-collab">Interested in collaborating with me?</div>
            <div>
                <button className="contact-btn">Get in touch</button>
            </div>
            <div className="contact-online">Or find me on these online spaces:</div>
            <div className="contact-icons">
                <a href="https://github.com/ancaagp" target="_blank">
                    <img className="github-icon" src={github_icon_32} />
                </a>
                <a href="https://www.linkedin.com/in/ancaagapi/" target="_blank">
                    <img className="linkedin-icon" src={linkedin_26} />
                </a>
            </div>



        </div>

            {/* favicon */}
        <div className='favicon'>
                A
            </div>
        </div>
    )
}

export default Contact;