import React from 'react';
import Typewriter from '../utils/Typewriter';
import '../style.css';

function Homepage () {
    return (
        <div className="homepage" id="homepage">
            <span>
                <div className="homepage-title">Anca Agapi</div>
                <div className="homepage-subtitle">Product Engineer</div>
                <div className="homepage-description" id="homepage-description">
                    <Typewriter 
                        refreshTime="120">
                        I help companies build user centric products
                    </Typewriter>
                </div>
            </span>
        </div>
    )
}

export default Homepage;
