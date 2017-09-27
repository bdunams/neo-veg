// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper Functions (in this case the only one is runQuery)
var helpers = {

  // createUser: function() {
  // 	return axios.post("/api/user");
  // },
  getVeg: function() {
  	return axios.get("/api/veg");
  },
  getUserVeg: function() {
    return axios.get("/api/userveg");
  },
  updateUserVeg: function() {
  	return axios.put("/api/userveg");
  },
  removeUserVeg: function() {
  	return axios.post("/api/remove-from-garden");
  },
  addToCal: function() {
    return axios.get("/api/calendar");
  }

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
