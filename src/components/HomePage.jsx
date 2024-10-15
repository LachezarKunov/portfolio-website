import React from "react";
import './HomePage.css';

function HomePage () {
    return (
        <>
        <div className="homepage-container">
            <div className="text-container">
                <h1>Welcome.</h1>
                <p>
                I’m Lachezar Kunov,<br></br> 
                a third-year student in Information Systems.<br></br> 
                As a motivated software engineer,<br></br>
                I am eager to enhance my skills in software development and contribute to innovative projects.
                </p>
            </div>
            <div className="img-container">
                <img src="../../public/assets/software-engineer.png" alt="" />
            </div>
        </div>
        </>
    )
}

export default HomePage;