import React from "react";
import './HomePage.css';

function HomePage () {
    return (
        <>
        <div className="homepage-container">
            <div className="text-container">
                <h1>Welcome.</h1>
                <p>
                I'm Lachezar Kunov, <br></br>
                a third-year Information Systems student with a strong enthusiasm for software engineering.<br></br>
                I'm excited to kickstart my career in the IT industry and contribute to developing innovative solutions.<br></br>
                With practical experience in the field, I'm eager to apply my skills and knowledge to real-world projects.
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