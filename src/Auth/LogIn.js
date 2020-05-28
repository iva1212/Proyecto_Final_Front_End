import React, { Component } from "react";
import { Container,Form,Button,Card } from 'react-bootstrap';
import {isLoggedIn} from '../Components/Util/Auth';
export default class Login extends Component {
    render() {
        if(isLoggedIn()){
            window.location.href = "/";
            return(
                <p></p>
            );
        }
        function userLoginFetch( email, password ){
            let url = 'https://videogames-app.herokuapp.com/api/users/login';
        
            let data = {
                email,
                password
            }
        
            let settings = {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify( data )
            }
        
            fetch( url, settings )
                .then( response => {
                    if( response.ok ){
                        return response.json();
                    }

                    throw new Error( response.statusText );
                })
                .then( responseJSON => {
                    localStorage.setItem( 'token', responseJSON.token );
                    window.location.href = "/";
                })
                .catch( err => {
                    alert("Something happend,Try again");
                    console.log(err);
                });
        }
        const handleSubmit = (event) => {
            const form = event.currentTarget;
            const email = form.querySelector('#formBasicEmail');
            const password = form.querySelector('#formBasicPassword');
            event.preventDefault();
            event.stopPropagation();
            
            userLoginFetch(email.value,password.value);
          };
        
        return (
            <Container style={{minHeight: '82vh'}}>
                <Card style={{ 
                padding : '20px',marginTop: '20px'}}>
                <Form  onSubmit={handleSubmit}>
                <h3>Log In</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p className="forgot-password text-right">
                    Not registered? <a href="/signUp">Sign Up!</a>
                    </p>
                    </Form>
                    </Card>
            </Container>
        );
    }
}