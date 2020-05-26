import React, { Component } from "react";
import { Container,Card } from 'react-bootstrap';
import {isLoggedIn,LogOut} from '../Components/Util/Auth';
export default class SignUp extends Component {
    render() {
        if(isLoggedIn()){
            window.location.href = "/";
            return(
                <p></p>
            );
        }
        function userSignUpFetch( name,last_name,email, password ){
            let url = 'http://127.0.0.1:8080/api/users';
        
            let data = {
                name,
                last_name,
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
                    alert("Sign up Succesful");
                    window.location.href = "/";
                })
                .catch( err => {
                    alert(err.message);
                });
        }
        const handleSubmit = (event) => {
            const form = event.currentTarget;
            const email = form.querySelector('#emailInput');
            const password = form.querySelector('#passwordInput');
            const name =  form.querySelector('#nameInput');
            const last_name = form.querySelector('#last_nameInput');
            event.preventDefault();
            event.stopPropagation();
            console.log(name.value);
            console.log(last_name.value);
            userSignUpFetch(name.value,last_name.value,email.value,password.value);
          };
        return (
            <Container style={{minHeight: '84vh'}}>
            <Card style={{ 
                padding : '20px',marginTop: '20px'}}>
            <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" id="nameInput" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" id="last_nameInput" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" id="emailInput"className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="passwordInput"className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
            </Card>
            </Container>
        );
    }
}