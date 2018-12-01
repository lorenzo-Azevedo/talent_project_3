import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LoginDiv extends Component {
  render() {
    return (
    <div classNameName="container-fluid" id="loginComponent">
    <div className="container-clearfix divs">
        <div className="container" id="logInForm">
            <p>Welcome back!</p>
        <br/>
        <form>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" id="signupEmail" placeholder="name@example.com"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="signupPassword" placeholder="Password"/>
            </div>
        </form>
            <div className="col-sm-12">
              <button type="submit" id="submitLogIn" className="btn btn-primary col-md-2 float-left"><Link to="/success">Login</Link></button>
              <button type="button" className="btn col-md-2 float-right" id="goBackWelcomeLogIn"><Link to="/welcome">Go Back</Link></button>
            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default LoginDiv; 