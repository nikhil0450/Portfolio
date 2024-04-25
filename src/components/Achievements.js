import React from 'react';
import { Container } from 'react-bootstrap';

function Achievements() {
    return (
        <section id="achievements" className="py-5">
            <Container>
                <h2 className="text-center">Achievements</h2>
                <ul>
                    <li>Graduated in Bachelor's of Computer Science with <b>First Class with Distinction</b></li>
                    <li>2nd in Leaderboard in MERN Stack Course</li>
                    <li>Achievement 3</li>
                    {/* Add more achievements as needed */}
                </ul>
            </Container>
        </section>
    );
}

export default Achievements;
