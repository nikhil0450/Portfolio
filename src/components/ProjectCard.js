import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ProjectCard({ title, description, githubFELink, githubBELink, deployedLink }) {
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
                        <>
                            <Button variant="link" onClick={toggleDescription}>Read Less</Button>
                            {githubFELink && (
                            <div> 
                                <Button className="project-button m-1" variant="primary" href={githubFELink} target="_blank">FrontEnd Source Code</Button>
                            </div>
                            )}
                            {githubBELink && (
                            <div> 
                                <Button className="project-button m-1" variant="primary" href={githubBELink} target="_blank">BackEnd Source Code</Button>
                            </div>
                            )}
                        </>
                    )}
                    <Button className="project-button m-1" variant="primary" href={deployedLink} target="_blank">View Deployed Project</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProjectCard;
