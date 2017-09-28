// Import React
import React, { Component } from 'react';
import axios from 'axios';

// Helper Functions
import Helpers from './utils/helpers.js';

// This is the Main component.
export default class Subscription extends Component{
  
  constructor(props){
    super(props)
    
    this.state = {user: ''}
  }

  // Render Component
  render() {
    
    return(
        <div id="subscription" className="container">
            <h2>Start your subscription today!</h2>
            <h3>Some marketing and a chart</h3>
        </div>
    )
  }
};