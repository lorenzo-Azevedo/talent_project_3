import React, { Component } from 'react';
import img from './talent_1.jpg';
import img2 from './talent_2.jpg';
import img3 from './talent_3.jpg';

class RenderClient extends Component {
  render() {
    return (
    <div classNameName="container-fluid" id="clientComponent">
    <div className="container-clearfix divs">
        <div className="container" id="renderClients">
            <h2>Talent</h2>
            <br/>
            <img src={img} alt="." />
            <img src={img2} alt="." />
            <img src={img3} alt="." />
            <br/>
        <button type="submit" id="renderClient" className="btn btn-primary col-md-3">Render Talent</button>
        </div>
    </div>
    </div>
    );
  }
}

export default RenderClient; 