import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/header/header';
import HeaderDefault from './Components/header_default/header_default';
import Welcome from './Components/welcome/welcome';
import LoginDiv from './Components/login/login';
import SignupForm from './Components/signupForm/signupForm';
import Success from './Components/success/success';
import ListingForm from './Components/listingForm/listingForm';
import RenderListing from './Components/renderListing/renderListing';
import RenderClient from './Components/renderClient/renderClient';
import Footer from './Components/footer/footer';

import './Assets/css/deafult.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Router>
          <React.Fragment>
            <Route exact path="/" component={HeaderDefault} />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={LoginDiv} />
            <Route exact path="/signupForm" component={SignupForm} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/renderClient" component={RenderClient} />
            <Route exact path="/renderListing" component={RenderListing} />
            <Route exact path="/listingForm" component={ListingForm} />
            <Route exact path="/login" component={HeaderDefault} />
            <Route exact path="/signupForm" component={HeaderDefault} />
            <Route exact path="/welcome" component={HeaderDefault} />
            <Route exact path="/success" component={Header} />
            <Route exact path="/renderClient" component={Header} />
            <Route exact path="/renderListing" component={Header} />
            <Route exact path="/listingForm" component={Header} />
          </React.Fragment>
        </Router>

        <Footer />
      
      </div>
    );
  }
}

export default App;
