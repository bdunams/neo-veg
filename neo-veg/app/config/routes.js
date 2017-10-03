// Include the React library
import React from "react";

// Include the react-router module
// Include the Route component for displaying individual routes
// Include the Router component to contain all our Routes
import { Router, Route, Switch, hashHistory, IndexRoute } from 'react-router'

// Reference the high-level components
import Main from "../components/Main";
import VegetableList from "../components/vegetable_list";


// Include the hashHistory prop to handle routing client side without a server
//let hashHistory = router.hashHistory;
//
//// Include the IndexRoute (catch-all route)
//let IndexRoute = router.IndexRoute;


const Routes = () => {
  
  // The high level component is the Router component
  <Router history={hashHistory}>
    
    <Route path="/" component={Main}>
      
      {/* If user selects Info or Chat show the appropriate component */}
      <Route path="vegetables" component={VegetableList} />
      
      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Main} />
      
    </Route>
    
  </Router>
  
};

export default Routes;