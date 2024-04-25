import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <Container className="text-center">
                <p>&copy; {new Date().getFullYear()} Nikhil Kulkarni</p>
            </Container>
        </footer>
    );
}

export default Footer;
