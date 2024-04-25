import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import './Projects.css'; // Import custom CSS file for additional styling

function Projects() {
    return (
        <section id="projects" className="bg-light py-5">
            <Container>
                <h2 className="text-center mt-5">Projects</h2>
                <div className="project-cards">
                    <ProjectCard
                        title="Diet Suggestion Application"
                        description="Crafted a user-friendly Diet Suggestion App, employing JS, Node.js, React.js, and MongoDB. Dynamically 
                        generates personalized dietary recommendations based on user input like height and weight. 
                        Demonstrates expertise in full-stack development, data handling, and user-centric design. Deployed the 
                        project on Netlify & Render."
                        deployedLink = "https://diet-suggestion-app-fcp.netlify.app/home"
                    />
                    <ProjectCard
                        title="Password Reset Flow"
                        description="Built a secure password reset system using MERN (MongoDB, Express.js, React.js, Node.js) stack. 
                        Enabled users to recover forgotten passwords with token-based authentication. Ensured scalability 
                        with MongoDB and heightened security using bcrypt. Demonstrates proficiency in full-stack 
                        development, authentication, and security. Deployed the project on Netlify & Render."
                        deployedLink = "https://pass-reset-flow.netlify.app/"
                    />
                    {/* Add more ProjectCard components as needed */}
                </div>
            </Container>
        </section>
    );
}

export default Projects;
