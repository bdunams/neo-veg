// Import React
import React, { Component } from 'react';

// Import Components
import Navbar from '../containers/navbar';
import CenterPiece from './center_piece';

// Helper Functions
import Helpers from './utils/helpers.js';

// This is the Main component.
export default class Main extends Component{

  // Here we describe this component's render method
  render() {
    return (
      <div className="container">
        < Navbar />
        < CenterPiece />
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = Main;
