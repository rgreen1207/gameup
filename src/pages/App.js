import React from 'react';
import hero from '../images/hero.svg';
import '../css/App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <a href="/" rel="noopener noreferrer">
                    <img src={hero} alt="_hero_homepage_image" className="hero-Image"/>
                </a>
            </header>
        </div>
    );
}

export default App;
