import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'; 


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
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light navbar-inverse">
            <h2 className="navbar-brand brand-name">
               <a href="/"><img className="img-responsive2"       
               src="images/white_logo.png"/></a>
              </h2>
            <button className="navbar-toggler navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to={'/'} exact className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/vegetables'} exact className="nav-link">Plants</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/my-garden'} exact className="nav-link">My Garden</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/about-us'} className="nav-link">About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/subscription'} exact className="nav-link">Subscription</NavLink>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                  <span id="nav-name" className="text-center">Welcome {this.props.user.Name}</span>
                </li>
                <li className="nav-item">
                  <a className="btn btn-primary" href="/logout">Log Out</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>          
      )
    }

    
    // Default navbar, (no user logged in)
    return(
      <div className="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light navbar-inverse">
              <h2 className="navbar-brand brand-name">
               <a href="/"><img className="img-responsive2"       
               src="images/white_logo.png"/></a>
              </h2>
              <button className="navbar-toggler navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <NavLink to={'/'} exact className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/vegetables'} exact className="nav-link">Plants</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/about-us'} exact className="nav-link">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/subscription'} exact className="nav-link">Subscription</NavLink>
                    </li>
                  </ul>

                <ul className="nav navbar-nav navbar-right">
                  <li><a className="btn btn-success" href="/auth/google" role="button">Sign in</a></li>
                </ul>
              </div>
            </nav>
          </div>
      </div>
    )
  }
}

export default Navbar;