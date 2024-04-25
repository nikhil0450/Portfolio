import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ProjectCard({ title, description, deployedLink }) {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="project-card">
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {showFullDescription ? description : `${description.substring(0, 100)}...`}
                    </Card.Text>
                    {!showFullDescription && (
                        <Button variant="link" onClick={toggleDescription}>Read More</Button>
                    )}
                    {showFullDescription && (
                        <Button variant="link" onClick={toggleDescription}>Read Less</Button>
                    )}
                    <Button className="project-button" variant="primary" href={deployedLink} target="_blank">View Deployed Project</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProjectCard;
