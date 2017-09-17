// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'

// Include the Main Component
import Main from "./components/Main";
import Navbar from './containers/navbar';
import Vegetables from './components/vegetable_list';

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route component={Navbar}/>
      <Route exact path='/' component={Main}/>
      <Route path='/vegetables' component={Vegetables}/>
    </div>
  </BrowserRouter>
), document.getElementById("app"));
