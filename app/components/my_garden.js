// Import React
import React, { Component } from 'react';
import axios from 'axios';

import Calendar from './calendar';

// Helper Functions
import Helpers from './utils/helpers.js';

// This is the Main component.
export default class MyGarden extends Component{
  
  constructor(props){
    super(props)
    
    this.state = {myVegetablesList: [], gardenData: ""}
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
            <div key={vegetable._id} className="col-md-12 col-sm-12">
              <div className="col-md-4">
                <img src={imageUrl} className="img-responsive2" />
              </div>
              
              <div className="col-md-8">
                <h3>{vegetable.VegName}</h3>
                
                <div className="col-md-6">
                  <h4>Tips</h4>
                  <p>Spacing: {vegetable.Spacing}</p>
                  <p>Depth: {vegetable.Depth}</p>
                  <p>Fertilize: {vegetable.Fertilize}</p>
                  <p>Water: {vegetable.Water}</p>
                </div>
                
                <div className="col-md-6">
                  <h4>Important Dates</h4>
                  <p>
                    Indoor Seeding: From {vegetable.IndoorSeedStart} to {vegetable.IndoorSeedEnd}
                  </p>
                  <p>
                    Outdoor Seeding: From {vegetable.OutdoorSeedStart} to {vegetable.OutdoorSeedEnd}
                  </p>
                  <p>
                    Harvest Time: From {vegetable.HarvestStart} to {vegetable.HarvestEnd}
                  </p>
                </div> 
              </div>
              <hr />
            </div>
          )

        })
      
        this.setState({ myVegetablesList: vegetables, gardenData: gardenData });
      }
    })
    
  }

  // Render Component
  render() {
  
    // IF the user has vegetables in their garden to display
    if(this.state.myVegetablesList.length > 0){
      return (
        <div>

        < Calendar gardenData={ this.state.gardenData }  />

          <div id="my-garden" className="container">
            <div className="row">
              {this.state.myVegetablesList}
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div id="my-garden" className="row">
        <div className="container">
          <h2>View your garden here!</h2>
          <p>You don't have any plants yet, go add some and track their progress!</p>
        </div>
      </div>
    );
  }
};