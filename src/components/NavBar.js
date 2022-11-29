import React from 'react';
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar({ currentPage, handlePageChange }) {
    return (
        <Container>
            <Navbar  className="navbar has-background-light" role="navigation"aria-label="main navigation">

                <Navbar.Brand className={currentPage === 'aboutme' ? 'nav-link active' : 'nav-link'} href="#aboutme" onClick={() => handlePageChange('aboutme')}>Shadin S. Al-Arab</Navbar.Brand>
                <Nav className="me-auto px-5">
                    <Nav.Link className={currentPage === 'aboutme' ? 'nav-link active' : 'nav-link'} href="#aboutme" onClick={() => handlePageChange('aboutme')}>About Me</Nav.Link>
                    <Nav.Link className={currentPage === 'porfolio' ? 'nav-link active' : 'nav-link'} href="#portfolio" onClick={() => handlePageChange('portfolio')}>Portfolio</Nav.Link>
                    <Nav.Link className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={() => handlePageChange('contact')}>Contact</Nav.Link>
                    <Nav.Link className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'} href="#resume" onClick={() => handlePageChange('resume')}>Resume</Nav.Link>
                </Nav>

            </Navbar>
        </Container>
    );
}

export default NavBar;