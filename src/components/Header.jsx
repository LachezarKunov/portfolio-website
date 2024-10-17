import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

function Header() {
    const openCV = () => {
        window.open('public/assets/CV.pdf', '_blank')
    }
    return (
        <>
            <div className = 'nav-container'>
                <nav>
                    <div>
                        <NavLink to="/">
                            LK
                        </NavLink>
                    </div>
                    
                    <div className = "nav-buttons-container">
                        <div>
                            <NavLink to="/">
                                <FontAwesomeIcon icon={faHome} /> Home
                        </NavLink>
                        </div>
                        <div>
                            <NavLink to="/projects">
                                <FontAwesomeIcon icon={faProjectDiagram} /> Projects
                            </NavLink>
                        </div>
                        <div>
                            <NavLink onClick={openCV}>
                                <FontAwesomeIcon icon={faFileAlt} /> CV
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
