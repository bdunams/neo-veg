// Import React
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

// Import Components
import CenterPiece from './center_piece';
import TopVegetablesList from './top_vegetables';
import Navbar from '../containers/navbar';
import Vegetables from './vegetable_list';


// Helper Functions
import Helpers from './utils/helpers.js';

// This is the Main component.
export default class Main extends Component{
  constructor(props){
    super(props);
    
    this.state = { user: '', loggedIn: false };
  }
  
  componentWillMount(){
    axios.get('/user').then((response) => {
      console.log(response.data.user);
      let user = response.data.user;
      if(user){
        this.setState({user: user, loggedIn: true})
      }
      else{
        this.setState({ user: '', loggedIn: false });
      }
    })
    
  }

  // Here we describe this component's render method
  render() {
    return (
      <div className="container">
        < Navbar user={this.state.user} loggedIn={this.state.loggedIn} />
        < Switch>
         
            <Route exact path='/' component={CenterPiece} />
            <Route path='/vegetables' component={Vegetables}/>
          
        </Switch>
      </div>
    );
  }
};

