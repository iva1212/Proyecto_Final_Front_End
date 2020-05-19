import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
function Footer(){
    return(

        <Navbar sticky="bottom" bg="dark" variant="dark" expand="lg">
            
                <Navbar.Text href="#">©Copyright Footer</Navbar.Text>
            
        </Navbar>

    );
}

export default Footer;