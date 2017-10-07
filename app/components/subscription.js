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
            <h2 className="titleSubscription">Start your subscription today!</h2>
            <h3 className="titleSub">Choose the gardening solution that fits your needs.</h3>

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
                  Starter Kit - Gardening Essentials
                </li>
                <li>
                  Vegetable seed packs (7 pack limit)
                </li>
              </ul>
              <div className="pricing-footer">
                <p>
                   Gardening essentials include: <br/>Hand-shovel, Plant food, and Gloves
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
                  Seeds for All Vegetables in MyGarden Delivered when Seeding is Necessary
                </li>
                <li>
                  Gardening Essentials
                </li>
                <li>
                  Fertilizer Delivered per Each Vegetable in MyGarden when Needed
                </li>
                <li>
                  Vegetable Gardeners Handbook
                </li>
              </ul>
              <div className="pricing-footer">
                <p>
                   <img className="homeImages" src="images/book.jpg"/>
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