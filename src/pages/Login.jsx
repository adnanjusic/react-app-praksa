import React, { Component } from "react";
import "../login.css";
import AuthService  from '../services/auth-service.js'

export default class Login extends Component {
   constructor(props) {
        super(props); 

        this.state = {email:'', password: ''};
    }

    render() {
        return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <h3>Sign In</h3>
                    <div className="form-group mb-3">
                         <div className="alert alert-danger" style={{display: 'none'}} id="wrongCredentials">
                            The username or password is incorrect.
                         </div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={(e) => this.onEmailChanged(e)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={(e) => this.onPasswordChanged(e)}/>
                    </div>
                    <div className="form-group mb-3">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="d-grid gap-2">               
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div>
                    <p className="forgot-password text-right">
                        Forgot <a href="/login">password?</a>
                    </p>
                </form>
            </div>
        </div>
        );
    }

    async handleSubmit(e) {
        e.preventDefault();
        var isLoggedIn = await AuthService.login(this.state.email, this.state.password);
        if(isLoggedIn)
        {
            document.getElementById("wrongCredentials").style = "display:none";
            window.location = "/";
        }
        else {
            document.getElementById("wrongCredentials").style = "display:block";
        }
    }

    onEmailChanged(e) {
        var { email, password} = this.state;
        email = e.target.value;
        this.setState({ email, password});
    }

    onPasswordChanged(e) {
        var { email, password} = this.state;
        password = e.target.value;
        this.setState({ email, password});
    }
}