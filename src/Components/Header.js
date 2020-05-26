import React from 'react';
import {BrowserRouter as Router,Link } from 'react-router-dom';
import { Navbar, Button,Nav} from 'react-bootstrap';
import {isLoggedIn,LogOut,isAdmin} from '../Components/Util/Auth';
function Header(){
    let Items=[];
    let navItems=[];
    if(isLoggedIn()){
        navItems.push(
            <>
            <Nav.Link href="/profile">Profile</Nav.Link>
            </>
        )
        Items.push(
            <span>
            <Button variant="danger" style={{margin: '10px'}} onClick={LogOut}>Logout</Button>
            </span>
        )
        if(isAdmin()){
            navItems.push(
                <Nav.Link href="/admin">Admin</Nav.Link>
            )
        }
    }
    else{
        Items.push(
            <span>
            <Link to={'/login'}><Button variant="success" style={{margin: '10px'}}>Login</Button></Link>
            <Link to={'/signUp'}><Button variant="primary" style={{margin: '10px'}}>SignUp</Button></Link>
        </span>
        )
    }
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">VGR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/database">Database</Nav.Link>
                {navItems}
        </Nav>
        
        {Items}
        
        </Navbar.Collapse>
        </Navbar>
        



    );

}

export default Header;