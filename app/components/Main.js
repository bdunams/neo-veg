// Include React
var React = require("react");

// Helper Function
var helpers = require("./utils/helpers.js");

// This is the main component.
var Main = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <div>
        <div className="header">
          <div className="container">
              <nav className="navbar navbar-inverse" role="navigation">
                  <div className="navbar-header">
                      <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a href="#" className="navbar-brand scroll-top">
                          <div className="logo"></div>
                      </a>
                  </div>

                  <div id="main-nav" className="collapse navbar-collapse">
                      <ul className="nav navbar-nav">
                          <li><a href="#" className="scroll-top">Home</a></li>
                          <li><a href="#" className="scroll-link" data-id="about">About Us</a></li>
                          <li><a href="#" className="scroll-link" data-id="portfolio">Portfolio</a></li>
                          <li><a href="#" className="scroll-link" data-id="blog">Blog</a></li>
                          <li><a href="#" className="scroll-link" data-id="contact">Contact Us</a></li>
                      </ul>
                  </div>

              </nav>

          </div>

      </div>

      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h2 className="text-center">Neo Veg</h2>
            <p className="text-center">
              <em>The Garden Assistant</em>
            </p>
          </div>

        </div>

      </div>
    </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
