import React from 'react';
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavBar({ currentPage, handlePageChange }) {
    return (
        <Container>
            <Navbar  className="navbar has-background-light" role="navigation"aria-label="main navigation">
                <Navbar.Brand className={currentPage === 'aboutme' ? 'nav-link active' : 'nav-link'} href="#aboutme" onClick={() => handlePageChange('aboutme')}>Shadin S. Al-Arab</Navbar.Brand>
            <Nav>
            <Nav.Link to='/' as={Link}>About Me</Nav.Link>
              <Nav.Link to='/portfolio' as={Link}>Portfolio</Nav.Link>
              <Nav.Link to='/contact' as={Link}>Contact</Nav.Link>
              <Nav.Link to='/resume' as={Link}>Resume</Nav.Link>
              </Nav>
            </Navbar>
        </Container>
    );
}

export default NavBar;