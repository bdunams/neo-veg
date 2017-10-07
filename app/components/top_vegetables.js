// Import React
import React, { Component } from 'react';

// Helper Functions
import Helpers from './utils/helpers.js';

// This is the TopVegetables component.
export default class TopVegetables extends Component{

  // Here we render component
  render() {
    return ( 

        <div className="container text-center" id="top-vegetables">
          <div className="col-md-3 col-sm-6 col-xs-12 cardSpacing">
              <div className="service-item first-service ">
                  <div className='floated_img'><img className="homeImages" src="images/Beets.jpg"/></div>
                  <p><strong>NeoVeg is your personal garden assistant.</strong></p>
              </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12 cardSpacing">
              <div className="service-item second-service">
                  <div className='floated_img'><img className="homeImages" src="images/Pumpkins.jpg"/></div>
                  <p><strong>Here to help you build your garden seasonal recommendations.</strong></p>
              </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12 cardSpacing">
              <div className="service-item third-service">
                  <div className='floated_img'><img className="homeImages" src="images/Corn.jpg"/></div>
                  <p><strong>Offering a premium package with seeds of vegtables in season.</strong></p>
              </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12 cardSpacing">
              <div className="service-item fourth-service">
                  <div className='floated_img'><img className="homeImages" src="images/Radishes.jpg"/></div>
                  <p><strong>Sign-up now for the fulle NEOVEG experience.</strong></p>
              </div>
          </div>           
        </div>
    );
  }
};
