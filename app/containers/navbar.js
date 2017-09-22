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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Neo Veg</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <span className="navbar-brand">Welcome {this.props.user.Name}</span>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary" href="/logout">Log Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>          
      )
    }
    
    // Default navbar, (no user logged in)
    return(
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Neo Veg</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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