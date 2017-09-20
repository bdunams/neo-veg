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
      console.log(response);
      let gardenData = response.data.Garden;
      
      if(gardenData){
        
        let vegetables = gardenData.map((vegetable) => {
          let imageUrl = `images/${vegetable.VegName}.jpg`;
          
          return(
            <div key={vegetable._id}>
              <img src={imageUrl} />
              <h4>{vegetable.VegName}</h4>
            </div>
          )

        })
      
        this.setState({ myVegetablesList: vegetables });
      }
    })
    
  }

  // Render Component
  render() {
  
    // IF the user has vegetables in their garden to display
    if(this.state.myVegetablesList.length > 0){
      return (
        <div className="row">
          <div className="container">
            <div>{this.state.myVegetablesList}</div>
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