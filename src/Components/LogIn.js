import React, { Component } from "react";
import { Container,Form,Button,Card } from 'react-bootstrap';
export default class Login extends Component {
    render() {
        return (
            <Container style={{minHeight: '82vh'}}>
                <Card style={{ 
                padding : '20px',marginTop: '20px'}}>
                <Form>
                <h3>Log In</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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