import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons library
import './Home.css'; // Import custom CSS file for additional styling

function Home() {
    return (
        <section id="home" className="bg-light py-5 text-center">
            <Container>
                <div className="home-content">
                    <h1 className="home-title">Welcome to My Portfolio</h1>
                    <p className="home-subtitle">I'm Nikhil Kulkarni, a Full Stack Web Developer</p>
                    {/* Add GitHub and LinkedIn icons */}
                    <div className="home-links">
                        <a href="https://github.com/nikhil0450" target="_blank" rel="noopener noreferrer" className="home-link">
                            <FaGithub className="home-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/nikhil45" target="_blank" rel="noopener noreferrer" className="home-link">
                            <FaLinkedin className="home-icon" />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Home;
