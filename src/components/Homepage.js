import React from 'react';
import Typewriter from '../utils/Typewriter';
import '../style.css';
import g1 from '../images/Graphic_2_large.png';

function Homepage () {
    return (
        <div className="homepage" id="homepage">
            <span className="homepage-text-container">
                <div className="homepage-title">Anca Agapi</div>
                <div className="homepage-subtitle">Product Engineer</div>
                <div className="homepage-description" id="homepage-description">
                    <Typewriter 
                        refreshTime="120">
                        I help companies build user centric products
                    </Typewriter>
                </div>
            </span>
            <img className="homepage-art" src={g1}/>
        </div>
    )
}

export default Homepage;
