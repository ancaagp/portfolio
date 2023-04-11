import React from 'react';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';


function App () {
    return (
        <div className="main-container">
            <Navigation />
            <Homepage />
            <div className="secondary-container">
                <About />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default App;