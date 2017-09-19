// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';

// Include the Main Component
import Main from "./components/Main";
import Navbar from './containers/navbar';
import Vegetables from './components/vegetable_list';

// React Routes
ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path='/' component={Main}/>
    </div>
  </BrowserRouter>
), document.getElementById("app"));
