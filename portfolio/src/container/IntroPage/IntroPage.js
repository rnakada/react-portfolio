import React from 'react';
import './IntroPage.css';

const IntroPage = (props) => (
    <div className="Intro" onClick={props.clicked}>
        <div className="About">
            <h1>Hi, I am Ryuichi </h1>
            <p>Click Anywhere!</p>
        </div>
    </div>
)

export default IntroPage;