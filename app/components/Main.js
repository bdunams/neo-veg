// Import React
import React, { Component } from 'react';

// Import Components
import CenterPiece from './center_piece';
import TopVegetablesList from './top_vegetables';


// Helper Functions
import Helpers from './utils/helpers.js';

// This is the Main component.
export default class Main extends Component{

  // Here we describe this component's render method
  render() {
    return (
      <div className="container">
        < CenterPiece />
        < TopVegetablesList />
      </div>
    );
  }
};

