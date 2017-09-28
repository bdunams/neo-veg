// Import React
import React, { Component } from 'react';
import axios from 'axios';

// Helper Functions
import Helpers from './utils/helpers.js';

// This is the Main component.
export default class Vegetable extends Component{
  
  constructor(props){
    super(props)
    
    this.state = {vegetablesList: []}
  }
  
  handleAddToGarden(event){
    event.preventDefault();
    
    axios.post('/api/add-to-garden', {vegetableName: event.target.VegName.value})
      .then((data) => { console.log(data)} );
  }
  
  // Will run right before mounting component
  componentWillMount(){
    // get all plants and display them
    axios.get('/api/veg').then((response) => {
      console.log(response.data);
      let vegeData = response.data.vegetables;
      // IF we received plants data 
      if(vegeData){
        // map out each plant in propper format, then return jsx
        let vegetables = vegeData.map((vegetable) => {
          let imageUrl = `images/${vegetable.VegName}.jpg`;
          
          return(
            <div key={vegetable._id} className="col-md-4 col-sm-2">
              <img src={imageUrl} className="img-responsive" />
              <h4>{vegetable.VegName}</h4>
              <form method="post" onSubmit={this.handleAddToGarden}>
                <input type="hidden" name="VegName" value={vegetable.VegName} />
                <button type="submit" className="btn btn-success imageButton">+</button>
                <button type="submit" className="btn btn-success imageButtonNegative">x</button>
              </form>
            </div>
          )

        })
        
        // set VegetableList state equal to the array of formatted vegetable data 
        this.setState({ vegetablesList: vegetables });
      }
    })
    
  }

  // Render Component
  render() {
    // IF there is vegetable data to display
    if(this.state.vegetablesList.length > 0){
      return (
        <div id="all-plants" className="container">
          <div className="row">
            {this.state.vegetablesList}
          </div>
        </div>
      );
    }
    
    return (
      <div id="all-plants" className="container">
        <div className="row">
          <div>
            <h2>Vegetables Ready to be Planted</h2>
          </div>
          
          <div>
            <p>Looks like we're fresh out! Sorry :(</p>
          </div>
        </div>  
      </div>
    );
  }
};