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
          let imageUrl = `images/${vegetable.Name}.jpg`;
          
          return(
            <li className="col-md-3 col-sm-2">
              <img src={imageUrl} />
              <h4>{vegetable.Name}</h4>
            </li>
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
        <div className="row">
          <div className="container">
            <ul>{this.state.vegetablesList}</ul>
          </div>
        </div>
      );
    }
    
    return (
      <div className="row">
        <div className="container">
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