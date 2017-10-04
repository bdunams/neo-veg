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
    
    this.state = {
      calData: {
        events : null
      }
    }
  }

  componentWillReceiveProps(nextProps){
    this.getData(nextProps.gardenData);
  }

  getData( newProps ) {
    let calData = [];

    newProps = newProps ? newProps : this.props.gardenData;

    newProps.forEach(function(item){

      calData[item.VegName] = [];

      if ( (! item.IndoorSeedStart) || item.IndoorStart === "FALSE" ) {
        var IndoorStart = "--";
        var IndoorShortRange = "--";
      }
      else{
        var IndoorStart = moment(item.IndoorSeedStart).format("MM-DD");
        var IndoorShortRange = moment(IndoorStart).add(1, 'w').format("MM-DD");
      }

      var OutdoorStart = moment(item.OutdoorSeedStart).format("MM-DD");
      var OutdoorShortRange = moment(OutdoorStart).add(7, 'days').format("MM-DD");

      var HarvestStart = moment(item.HarvestStart).format("MM-DD");
      var HarvestShortRange = moment(HarvestStart).add(7, 'days').format("MM-DD");

      // var IndoorEnd = moment(item.IndoorSeedEnd).format("YYYY-MM-DD");
      // var OutdoorEnd = moment(item.OutdoorSeedEnd).format("YYYY-MM-DD");
      // var HarvestEnd = moment(item.HarvestEnd).format("YYYY-MM-DD");

      var year = moment().year();
      // var year = 2018;

      calData.push({
        title: `Seed ${item.VegName} Indoors`,
        start: year + "-" + IndoorStart,
        end: year + "-" + IndoorShortRange,
        color: "#24B500",
        textColor: "#FFFFFF"
      })
      
      calData.push({
        title: `Plant ${item.VegName} Outdoors`,
        start: year + "-" + OutdoorStart,
        end: year + "-" + OutdoorShortRange,
        color: "#FFE000",
        textColor: "#FFFFFF"
      })

      calData.push({
        title: `Harvest ${item.VegName}`,
        start: year + "-" + HarvestStart,
        end: year + "-" + HarvestShortRange,
        color: "#D30300",
        textColor: "#FFFFFF"
      })
    });

    this.setState({
      calData: {
        events:calData
      }
    });
  }
  
  // Will run right before mounting component
  componentWillMount(){
      this.getData();
  }

  componentWillUpdate(nextProps, nextState){
    $("#calendar").fullCalendar('destroy');
    $('#calendar').fullCalendar(nextState.calData);        
  }

  componentDidMount(){
      $("#calendar").replaceWith("<div id='calendar'></div>");
      $('#calendar').fullCalendar(this.state.calData);    
  }


  // Render Component
  render() {
    return (
      <div className="container-fluid calendarStyle">
        <div id='calendar'></div>
      </div>
    )
  }
};