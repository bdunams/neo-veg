// Import React
import React, { Component } from 'react';
import axios from 'axios';

// Helper Functions
import Helpers from './utils/helpers.js';

// This is the Main component.
export default class Subscription extends Component{
  
  constructor(props){
    super(props)
    
    this.state = {user: ''}
  }

  // Render Component
  render() {
    
    return(
        <div id="subscription" className="container">
            <h2>Start your subscription today!</h2>
            <h3>Some marketing and a chart</h3>

      <div className="container content">
        <div className="row">
          <div className="col-md-3">
            <div className="pricing hover-effect">
              <div className="pricing-head">
                <h3>Beginner <span>
                For You Sprouts Out There </span>
                </h3>
                <h4>FREE
                <br />
                </h4>
              </div>
              <ul className="pricing-content list-unstyled">
                <li>
                  Calendar Access
                </li>
                <li>
                  Milestone Reminders
                </li>
              </ul>
              <div className="pricing-footer">
                <p>
                   Give it a try! You have nothing to lose. 
                </p>
                <a href="javascript:;" className="btn yellow-crusta">
                Sign Up Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pricing hover-effect">
              <div className="pricing-head">
                <h3>Pro <span>
                Grow like a Pro </span>
                </h3>
                <h4><i>$</i>9<i>.99</i>
                <span>
                Per Month </span>
                </h4>
              </div>
              <ul className="pricing-content list-unstyled">
                <li>
                  Calendar Access
                </li>
                <li>
                  Milestone Reminders
                </li>
                <li>
                  Seed delivery of up to 3 subscribed vegetables
                </li>
              </ul>
              <div className="pricing-footer">
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna psum olor .
                </p>
                <a href="javascript:;" className="btn yellow-crusta disabled">
                Coming Soon
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pricing pricing-active hover-effect">
              <div className="pricing-head pricing-head-active">
                <h3>Expert <span>
                The Green Thumb </span>
                </h3>
                <h4><i>$</i>159<i>.99</i>
                <span>
                Per Year </span>
                </h4>
              </div>
              <ul className="pricing-content list-unstyled">
                <li>
                  Calendar Access
                </li>
                <li>
                  Milestone Reminders
                </li>
                <li>
                  Seed delivery of up to 12 subscribed vegetables
                </li>
                <li>
                  Free starter kit with Grow Guide
                </li>
              </ul>
              <div className="pricing-footer">
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna psum olor .
                </p>
                <a href="javascript:;" className="btn yellow-crusta disabled">
                Coming Soon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
};