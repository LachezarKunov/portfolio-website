import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

function Header() {
    const openCV = () => {
        window.open('/assets/CV.pdf', '_blank')
    }
    return (
        <>
            <nav>
                <div>
                    <NavLink to="/">
                        LK
                    </NavLink>
                </div>
                
                <div className = "nav-buttons-container">
                    <NavLink to="/">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </NavLink>
                    <NavLink to="/projects">
                        <FontAwesomeIcon icon={faProjectDiagram} /> Projects
                    </NavLink>
                    <NavLink onClick={openCV}>
                        <FontAwesomeIcon icon={faFileAlt} /> CV
                    </NavLink>
                </div>

            </nav> 
        </>
    );
}

export default Header;
