// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper Functions (in this case the only one is runQuery)
var helpers = {

  getUserVeg: function() {
    return axios.get("/api/userveg");
  },
  getVeg: function() {
  	return axios.get("api/veg");
  }

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
