// Include the React library
import React from "react";

// Include the react-router module
import router from "react-router";

// Include the Route component for displaying individual routes
let Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
let Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
let hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
let IndexRoute = router.IndexRoute;

// Reference the high-level components
let Main = require("../components/Main");
let Info = require("../components/Info");
let Chat = require("../components/Chat");

// Export the Routes
export default = (
  
  // The high level component is the Router component
  <Router history={hashHistory}>
    
    <Route path="/" component={Main}>
      
      {/* If user selects Info or Chat show the appropriate component */}
      <Route path="info" component={Info} />
      <Route path="chat" component={Chat} />
      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Info} />
      
    </Route>
    
  </Router>
  
);