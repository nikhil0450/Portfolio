import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import photo from "./nikhil.jpg"
import './About.css'; // Import custom CSS file for additional styling

function About() {
    return (
        <section id="about" className="py-5">
            <Container>
                <h2 className="text-center mt-5">About Me</h2>
                <Row className="align-items-center">
                    <Col md={4}>
                        <div className="photo-section">
                            <img src={photo} alt="Your Name" className="img" />
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="bio-section">
                            <p className="lead">Recent graduate with a MERN stack certification, equipped with hands-on experience in full-stack development. Eager to contribute skills in MongoDB, Express.js, React.js, and Node.js to innovative projects. Passionate about clean code and continuous learning, with a collaborative mindset.</p>
                            {/* Add your bio text here */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
