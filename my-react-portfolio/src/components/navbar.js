import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
import { Navbar, Nav, } from 'react-bootstrap';

export default function navbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Jared Neisen</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#about-me">About Me</Nav.Link>
                    <Nav.Link href="#portfolio">Resume</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div >
    )
}
