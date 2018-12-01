import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import img from './giphy.gif';

class Welcome extends Component {
  render() {
    return (
    <div className="container-fluid" id="welcomeComponent">
      <div className="container-clearfix divs">
      <div className="container" id="welcomeForm">
      <img src={img} alt="." />
      <br />
        <button type="button" className="btn btn-danger mt-3 float-left" id="LoginButton" onclick="change"><Link to="/login">Login</Link></button>
        <button type="button" className="btn btn-danger mt-3 float-right" id="signupButton" onclick="change"><Link to="/signupForm">Sign Up</Link></button>
      </div>
      </div>
    </div>
    );
  }
}

export default Welcome; 