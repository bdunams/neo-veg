// Import React
import React, { Component } from 'react';

// Helper Functions
import Helpers from './utils/helpers.js';

// This is the Main component.
export default class Vegetable extends Component{
  
  constructor(props){
    super(props)
    
  }

  // Here we describe this component's render method
  render() {
    return (
      <div className="container">
        <h1>Vegetable List</h1>
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = Vegetable;