import React from 'react';
import {BrowserRouter as Router,Link } from 'react-router-dom';
import { Navbar, Button,Nav} from 'react-bootstrap';

function Header(){
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">VGR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="">Database</Nav.Link>
                
        </Nav>
        <Link to={'/login'}><Button variant="success" style={{margin: '10px'}}>Login</Button></Link>
        <Link to={'/signUp'}><Button variant="primary" style={{margin: '10px'}}>Signup</Button></Link>
        
        </Navbar.Collapse>
        </Navbar>
        



    );

}

export default Header;