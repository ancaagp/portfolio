import React from 'react';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './style.css';

function App () {
    return (
        <div>
            <Navigation />
            <Homepage />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default App;