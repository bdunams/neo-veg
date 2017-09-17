import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { Switch, Route } from 'react-router-dom';

import Main from '../components/Main';
import Vegetables from '../components/vegetable_list';

class Navbar extends Component{
  constructor(props){
    super(props);
    
    this.state = { user: '' };
  }
  
  render(){
    // IF there is a user logged in, return user navbar
    if(this.props.user){
      return(
        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Neo Veg</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Plants</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a type="button" className="btn btn-default navbar-right navbar-btn">Log Out</a></li>
            </ul>
          </div>
        </nav>
      </div>          
      )
    }
    
    // Default navbar, (no user logged in)
    return(
      <div className="header container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Neo Veg</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/vegetables'} className="nav-link">Plants</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a className="btn btn-success" href="/auth/google" role="button">Sign in</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;