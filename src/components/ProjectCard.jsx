import React from 'react';
import './ProjectCard.css';

function ProjectCard({title, description,githubURL, demoURL}) {
    return (
        <>
        <div className = "card-container">
            <div className = "card-text-container">
                <div className = "card-title">{title}</div>
                <div className = "card-description">{description}</div>
            </div>
            
            <div className = "card-buttons">
                {demoURL && 
                    <a href={demoURL} target='_blank'> 
                    <button>Demo</button>
                    </a>
                }

                <a href={githubURL} target='_blank'>
                    <button >View Code</button>
                </a>
                
            </div>
        </div>
        </>
    )
}

export default ProjectCard;