import React, { Component } from 'react';
import img from './welcome.jpg';

class Success extends Component {
  render() {
    return (
    <div className="container-fluid" id="welcomeComponent">
      <div className="container-clearfix divs">
      <div className="container" id="welcomeForm">
      <img src={img} alt="." />
      </div>
      </div>
    </div>
    );
  }
}

export default Success; 