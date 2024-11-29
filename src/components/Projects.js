import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="bg-light py-5">
      <Container>
        <h2 className="text-center mt-5">Projects</h2>
        <div className="project-cards">
          <ProjectCard
            title="MERN Dashboard"
            description="Developed a full-stack MERN application that provides a comprehensive dashboard for transaction management and visualization. The project features APIs for transaction listing, statistics generation, and bar chart visualization, with month-based filtering and search functionality. The frontend, built with React, includes a dynamic table that supports pagination, month selection, and search by title, description, or price. The project also visualizes transaction data through an interactive bar chart, enhancing the user’s ability to analyze sales data over time. Deployed the project on Vercel & Render."
            deployedLink="https://mernstack-dashboard.vercel.app/"
            githubFELink="https://github.com/nikhil0450/mern-dashboard-frontend.git"
            githubBELink="https://github.com/nikhil0450/mern-dashboard-backend.git"
          />
          <ProjectCard
            title="Password Reset Flow"
            description="Built a secure password reset system using MERN (MongoDB, Express.js, React.js, Node.js) stack. 
                        Enabled users to recover forgotten passwords with token-based authentication. Ensured scalability 
                        with MongoDB and heightened security using bcrypt. Demonstrates proficiency in full-stack 
                        development, authentication, and security. Deployed the project on Netlify & Render."
            deployedLink="https://pass-reset-flow.netlify.app/"
            githubFELink="https://github.com/nikhil0450/PRF-FE.git"
            githubBELink="https://github.com/nikhil0450/PRF-BE.git"
          />
          <ProjectCard
            title="Diet Suggestion App"
            description="Crafted a user-friendly Diet Suggestion App, employing JS, Node.js, React.js, and MongoDB. Dynamically 
                        generates personalized dietary recommendations based on user input like height and weight. 
                        Demonstrates expertise in full-stack development, data handling, and user-centric design. Deployed the 
                        project on Netlify & Render."
            deployedLink="https://diet-suggestion-app-fcp.netlify.app/home"
            githubFELink="https://github.com/nikhil0450/Diet-Suggestion-App-Frontend.git"
            githubBELink="https://github.com/nikhil0450/Diet-Suggestion-App-Backend.git"
          />
            <ProjectCard
              title="Job Posting App"
              description="Designed and developed a comprehensive Job Posting Application using the MERN stack. The platform enables users to sign up, log in, and manage job posts. Users can view job postings by others, create, update, and delete their own posts. Integrated secure JWT-based authentication and protected routes for better user experience. The frontend is built with React and Bootstrap for responsive design, while the backend uses Node.js and MongoDB for robust data handling."
              deployedLink="https://myjobs-mern.netlify.app/"
              githubFELink="https://github.com/nikhil0450/job-posting-frontend.git"
              githubBELink="https://github.com/nikhil0450/job-posting-backend.git"
            />
        </div>
      </Container>
    </section>
  );
}

export default Projects;

<ProjectCard
  title="Password Reset Flow"
  description="Built a secure password reset system using MERN (MongoDB, Express.js, React.js, Node.js) stack. 
    Enabled users to recover forgotten passwords with token-based authentication. Ensured scalability 
    with MongoDB and heightened security using bcrypt. Demonstrates proficiency in full-stack 
    development, authentication, and security. Deployed the project on Netlify & Render."
  deployedLink="https://pass-reset-flow.netlify.app/"
  githubFELink="https://github.com/nikhil0450/PRF-FE.git"
  githubBELink="https://github.com/nikhil0450/PRF-BE.git"
/>;
