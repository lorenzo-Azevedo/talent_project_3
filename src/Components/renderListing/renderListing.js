import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import img from './listing_1.jpg';
import img2 from './listing_2.jpg';

class RenderListing extends Component {
  render() {
    return (
    <div classNameName="container-fluid" id="listingComponent">
    <div className="container-clearfix divs">
        <div className="container" id="renderListings">
            <h2>Listings</h2>
            <br/>
            <img src={img} alt="." />
            <img src={img2} alt="." />
            <br/>
            <div>
                <button type="submit" id="createListing" className="btn btn-primary col-md-3 float-left"><Link to="/listingForm">Create Listing</Link></button>
                <button type="submit" id="renderListing" className="btn btn-primary col-md-3 float-right">Render Listings</button>
            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default RenderListing; 