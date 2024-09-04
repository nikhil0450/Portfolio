import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import "./Resume.css"; // Import custom CSS file for additional styling

function Resume() {
  const resumeUrl = 'https://drive.google.com/file/d/1g-4FoACxCGUL-ssOW1kNGqDe649iwqU4/view';

  return (
    <section id="resume" className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button
              className="resume-button"
              href={resumeUrl}
              target="_blank"
            >
              <FaDownload className="download-icon" /> Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Resume;
