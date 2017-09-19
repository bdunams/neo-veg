// Import React
import React, { Component } from 'react';
import axios from 'axios';

// Helper Functions
import Helpers from './utils/helpers.js';

// This is the Main component.
export default class MyGarden extends Component{
  
  constructor(props){
    super(props)
    
    this.state = {myVegetablesList: []}
  }
  
  // Will run right before mounting component
  componentWillMount(){
    axios.get('/api/user-veg').then((response) => {
      console.log(response.data);
      let gardenData = response.data.Garden;
      
      if(gardenData){
        
        let vegetables = gardenData.map((vegetable) => {
          return(
            <li>
              <h4>{vegetable.VegName}</h4>
            </li>
          )

        })
      
        this.setState({ myVegetablesList: vegetables });
      }
    })
    
  }

  // Render Component
  render() {
    console.log(this.state.myVegetablesList)
    // IF the user has vegetables in their garden to display
    if(this.state.myVegetablesList.length > 0){
      return (
        <div className="row">
          <div className="container">
            <ul>{this.state.myVegetablesList}</ul>
          </div>
        </div>
      );
    }
    
    return (
      <div className="row">
        <div className="container">
          <h2>View your garden here!</h2>
          <p>You don't have any plants yet, go add some and track their progress!</p>
        </div>
      </div>
    );
  }
};