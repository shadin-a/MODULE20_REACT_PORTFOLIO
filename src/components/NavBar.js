import React from 'react';
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar({ currentPage, handlePageChange }) {
    return (
        <Container>
            <Navbar  className="navbar has-background-light" role="navigation"aria-label="main navigation">

                <Navbar.Brand className={currentPage === 'aboutme' ? 'nav-link active' : 'nav-link'} href="#aboutme" onClick={() => handlePageChange('aboutme')}>Shadin S. Al-Arab</Navbar.Brand>
            <Nav className=''>
            <Nav.Link to='/' href='/'>About Me</Nav.Link>
              <Nav.Link to='/portfolio' href='/portfolio'>Portfoilio</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
              <Nav.Link href='/resume'>Resume</Nav.Link>
              </Nav>
            </Navbar>
        </Container>
    );
}

export default NavBar;