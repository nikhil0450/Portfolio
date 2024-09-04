import React, { useState } from 'react';
import './Header.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaFilePdf  } from 'react-icons/fa';

function Header() {
    const [activeLink, setActiveLink] = useState('home'); 

    const resumeUrl = 'https://drive.google.com/file/d/1g-4FoACxCGUL-ssOW1kNGqDe649iwqU4/view';

    const handleResumeClick = () => {
        window.open(resumeUrl, '_blank');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="md" className='fixed-top'>
            <Container>
                <Navbar.Brand href="#home">
                    <span className="brand-subtitle">Nikhil Kulkarni</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            onClick={() => setActiveLink('home')}
                            className={activeLink === 'home' ? 'active' : ''}
                        >
                            <FaHome /> Home
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            onClick={() => setActiveLink('about')}
                            className={activeLink === 'about' ? 'active' : ''}
                        >
                            <FaUser /> About
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            onClick={() => setActiveLink('projects')}
                            className={activeLink === 'projects' ? 'active' : ''}
                        >
                            <FaBriefcase /> Projects
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            onClick={() => setActiveLink('contact')}
                            className={activeLink === 'contact' ? 'active' : ''}
                        >
                            <FaEnvelope /> Contact
                        </Nav.Link>
                        <Nav.Link onClick={handleResumeClick}><FaFilePdf  /> Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
