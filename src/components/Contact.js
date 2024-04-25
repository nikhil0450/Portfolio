import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import './Contact.css'; // Import custom CSS file for additional styling

function Contact() {
    return (
        <section id="contact" className="py-5">
            <Container>
                <h2 className="text-center mb-4">Contact Me</h2>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <ul className="contact-list">
                            <li>
                                <FaEnvelope className="contact-icon" />
                                <a href="mailto:nikhilkulkarni2208@gmail.com">nikhilkulkarni2208@gmail.com</a>
                            </li>
                            <li>
                                <FaPhone className="contact-icon" />
                                <span>+91 93701 34256</span>
                            </li>
                            <li>
                                <FaLinkedin className="contact-icon" />
                                <a href="https://www.linkedin.com/in/nikhil45" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </li>
                            <li>
                                <FaInstagram className="contact-icon" />
                                <a href="https://www.instagram.com/_nikhil.45_" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </li>
                            <li>
                                <FaGithub className="contact-icon" />
                                <a href="https://github.com/nikhil0450" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
