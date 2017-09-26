// Import Dependencies
import React, { Component } from 'react';
import axios from 'axios';
import fullCalendar from 'fullcalendar';
// import moment from 'moment';

// Helper Functions
import Helpers from './utils/helpers.js';

// Main component
export default class MyGarden extends Component{
  
  constructor(props){
    super(props)
    
    this.state = {calData: ""}
  }
  
  // Will run right before mounting component
  componentWillMount(){

    // let calData = {};
    let calData = [];
    this.props.gardenData.forEach(function(item){

      calData[item.VegName] = [];

      var IndoorStart = moment(item.IndoorSeedStart).format("YYYY-MM-DD");
      var IndoorEnd = moment(item.IndoorSeedEnd).format("YYYY-MM-DD");

      var OutdoorStart = moment(item.OutdoorSeedStart).format("YYYY-MM-DD");
      var OutdoorEnd = moment(item.OutdoorSeedEnd).format("YYYY-MM-DD");

      var HarvestStart = moment(item.HarvestStart).format("YYYY-MM-DD");
      var HarvestEnd = moment(item.HarvestEnd).format("YYYY-MM-DD");

      console.log(calData);

//      calData[item.VegName][0] = 
      calData.push({
        title: `Indoor ${item.VegName}`,
        start: IndoorStart,
        end: IndoorEnd
      })

//      calData[item.VegName][1] = 
      
       calData.push({
        title: `Outdoor ${item.VegName}`,
        start: OutdoorStart,
        end: OutdoorEnd
      })

//      calData[item.VegName][2] = 
      
       calData.push({
        title: `Harvest ${item.VegName}`,
        start: HarvestStart,
        end: HarvestEnd
      })

     // $('#calendar').fullCalendar({
     //         //      Veg.VegName: [{
     //         //            title: 'Indoor',
     //         //            start: Veg.IndoorSeedStart,
     //         //            end: Veg.IndoorSeedEnd
     //         //        },
     //         //        {
     //         //            title: 'Outdoor',
     //         //            start: Veg.OutdoorSeedStart,
     //         //            end: Veg.OutdoorSeedEnd
     //         //        },
     //         //        {
     //         //            title: 'Harvest',
     //         //            start: Veg.HarvestStart,
     //         //            end: Veg.HarvestEnd
     //         //        }]
    //          // });

    });

    this.setState({calData: {events:calData}});

  }

  componentDidMount(){
    console.log(this.state.calData)
     $('#calendar').fullCalendar(this.state.calData);
     // $('#calendar').fullCalendar(this.calData);
  }


  // Render Component
  render() {
    return (
      <div className="container-fluid">
        <div id='calendar'></div>
      </div>
    )
  }
};