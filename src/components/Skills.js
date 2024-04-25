import React from 'react';
import { Container } from 'react-bootstrap';
import HTML from "./skillSet/HTML.png"
import CSS from "./skillSet/CSS.png"
import JS from "./skillSet/JS.png"
import REACTJS from "./skillSet/React.png"
import NODEJS from "./skillSet/NodeJs.png"
import MONGODB from "./skillSet/mongoDB.png"
import MYSQL from "./skillSet/MySQL.png"
import BOOTSTRAP from "./skillSet/Bootstrap.png"
import EXPRESSJS from "./skillSet/ExpressJs.png"
import GITHUB from "./skillSet/GitHub.png"
import GIT from "./skillSet/git.png"
import JSON from "./skillSet/JSON.png"
import AWS from "./skillSet/AWS.png"
import TAILWIND from "./skillSet/tailwind.png"
import SERVER from "./skillSet/Web Server.png"
import './Skills.css'; // Import custom CSS file for additional styling

function Skills() {
    return (
        <section id="skills" className="py-5">
            <Container>
                <h2 className="text-center">Skills</h2>
                <div className="skills-icons">
                <img src={HTML} alt="HTML" className="skill-icon" title="HTML" />
                    <img src={CSS} alt="CSS" className="skill-icon" title="CSS" />
                    <img src={JS} alt="JavaScript" className="skill-icon" title="JavaScript" />
                    <img src={REACTJS} alt="React" className="skill-icon" title="React" />
                    <img src={NODEJS} alt="Node.js" className="skill-icon" title="Node.js" />
                    <img src={MONGODB} alt="MongoDB" className="skill-icon" title="MongoDB" />
                    <img src={EXPRESSJS} alt="Express Js" className="skill-icon" title="Express Js" />
                    <img src={MYSQL} alt="MySQL" className="skill-icon" title="MySQL" />
                    <img src={BOOTSTRAP} alt="BootStrap" className="skill-icon" title="BootStrap" />
                    <img src={TAILWIND} alt="TailWind CSS" className="skill-icon" title="TailWind CSS" />
                    <img src={AWS} alt="Amazon Web Services" className="skill-icon" title="Amazon Web Services" />
                    <img src={GITHUB} alt="GitHub" className="skill-icon" title="GitHub" />
                    <img src={GIT} alt="Git" className="skill-icon" title="Git" />
                    <img src={JSON} alt="JSON" className="skill-icon" title="JSON" />
                    <img src={SERVER} alt="Web Server" className="skill-icon" title="Web Server" />
                </div>
            </Container>
        </section>
    );
}

export default Skills;
