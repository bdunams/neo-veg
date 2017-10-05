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
    
    this.state = {myVegetablesList: [], gardenData: ""};
    this.handleRemoveFromGarden = this.handleRemoveFromGarden.bind(this);
  }

  handleRemoveFromGarden(event){
    event.preventDefault();
    
    axios.post('/api/remove-from-garden', {vegId: event.target._id.value})
      .then((data) => { 
          if(data){
            this.loadVegetables();
          }
      } );
  }

  loadVegetables(){
    axios.get('/api/user-veg').then((response) => {
      let gardenData = response.data.Garden;  
      if(gardenData){
        
        let vegetables = gardenData.map((vegetable) => {
          let imageUrl = `images/${vegetable.VegName}.jpg`;
          if ( (! vegetable.IndoorSeedStart) || vegetable.IndoorStart === "FALSE" ) {
            var IndoorStart = "--";
            var IndoorEnd = "--";
          }
          else {
            var IndoorStart = moment(vegetable.IndoorSeedStart).format("MMMM DD");
            var IndoorEnd = moment(vegetable.IndoorSeedEnd).format("MMMM DD");
          }

          var OutdoorStart = moment(vegetable.OutdoorSeedStart).format("MMMM DD");
          var OutdoorEnd = moment(vegetable.OutdoorSeedEnd).format("MMMM DD");

          var HarvestStart = moment(vegetable.HarvestStart).format("MMMM DD");
          var HarvestEnd = moment(vegetable.HarvestEnd).format("MMMM DD");

          return(
            // <Vegetable id={vegetable.id} image={vegetable.image} >
            <div key={vegetable._id} id="vegCard" className="col-md-4">
                <img src={imageUrl} className="img-responsive2" />

                <h3>{vegetable.VegName}</h3>
                
                <h4>--Tips--</h4>
                <p>Spacing: {vegetable.Spacing}"</p>
                <p>Depth: {vegetable.Depth}"</p>
                <p>Fertilize: {vegetable.Fertilize}</p>
                <p>Water: {vegetable.Water}</p>

                <h4>--Important Dates--</h4>
                <p>
                  Indoor Seeding: From {IndoorStart} to {IndoorEnd}
                </p>
                <p>
                  Outdoor Planting/Seeding: From {OutdoorStart} to {OutdoorEnd}
                </p>
                <p>
                  Harvest Time: From {HarvestStart} to {HarvestEnd}
                </p>

                <form method="post" onSubmit={this.handleRemoveFromGarden.bind(this)}>
                  <input type="hidden" name="_id" value={vegetable._id} />
                  <button type="submit" className="btn btn-danger imageButtonNegative">x</button>
                </form>

              <hr />
            </div>
          )

        })
        this.setState({ myVegetablesList: vegetables, gardenData: gardenData });
      }
    })
  }
  
  // Will run right before mounting component
  componentWillMount(){
    this.loadVegetables();
  }

  // Render Component
  render() {
  
    // IF the user has vegetables in their garden to display
    if(this.state.myVegetablesList.length > 0){
      return (
        <div>

        <Calendar gardenData={ this.state.gardenData }  />

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