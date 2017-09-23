// Import React
import React, { Component } from 'react';
import axios from 'axios';
import fullCalendar from 'fullcalendar';

// Helper Functions
import Helpers from './utils/helpers.js';

// This is the Main component.
export default class MyGarden extends Component{
  
  constructor(props){
    super(props)
    
    this.state = {calData: ""}
  }
  
  // Will run right before mounting component
  componentWillMount(){

    let calData = {};
    this.props.gardenData.forEach(function(item){

      calData[item.VegName] = [];

      calData[item.VegName][0] = {
        title: "Indoor",
        start: item.IndoorSeedStart,
        end: item.IndoorSeedEnd
      }

      calData[item.VegName][1] = {
        title: "Outdoor",
        start: item.OutdoorSeedStart,
        end: item.OutdoorSeedEnd
      }

      calData[item.VegName][2] = {
        title: "Harvest",
        start: item.HarvestStart,
        end: item.HarvestEnd
      }

    });

    this.setState({calData: calData});

  }

  componentDidMount(){
     $('#calendar').fullCalendar(this.state.calData);
  }

  // componentDidMount(){

  //   updateEvents:function(calData) {
  //     $('#calendar').fullCalendar('destroy');
  //     $('#calendar').fullCalendar({
  //       theme: false,
  //       timezone:'local',
  //       defaultView: 'agendaWeek',
  //       header: { center: 'Time Sheet',right:'agendaWeek'},
  //       navLinks: false, 
  //       editable: false,
  //       eventLimit: true,
  //       allDaySlot: false,
  //       scrollTime : '09:00:00',
  //       minTime : '09:00:00',
  //       maxTime : '18:00:00',
  //       defaultdate: dateFormat(Date(),"yyyy-mm-dd"),
  //       events: calData,
  //       contentHeight: 'auto',   
  //   }
  // }

  // componentDidUpdate(){
  //   let calData = {};
  //   this.props.gardenData.forEach(function(item){
  //     calData[item.VegName] = [];

  //     calData[item.VegName][0] = {
  //       title: "Indoor",
  //       start: item.IndoorSeedStart,
  //       end: item.IndoorSeedEnd
  //     }

  //     calData[item.VegName][1] = {
  //       title: "Outdoor",
  //       start: item.OutdoorSeedStart,
  //       end: item.OutdoorSeedEnd
  //     }

  //     calData[item.VegName][2] = {
  //       title: "Harvest",
  //       start: item.HarvestStart,
  //       end: item.HarvestEnd
  //     }
  //   });

  //   this.updateEvents(calData);
  // }

  // Render Component
  render() {
    return (
      <div>
        <div id='calendar'></div>
      </div>
    )
  }
};