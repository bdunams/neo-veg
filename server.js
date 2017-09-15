//REQUIREMENTS
	var express = require('express');
	var path = require('path');
	var favicon = require('serve-favicon');
	var logger = require('morgan');
	var cookieParser = require('cookie-parser');
	var bodyParser = require('body-parser');
	var logger = require("morgan");
	var mongoose = require("mongoose");

// var index = require('./routes/index');
// var users = require('./routes/users');
// var veg = require('./routes/veg');

var app = express();
var PORT = process.env.PORT || 8080;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));

//REQUIRE MODELS//
	var User = require("./models/user.js");
	var Veg = require("./models/veg.js");

// MONGODB CONFIGURATION//
	mongoose.connect("mongodb://neoveg");
	var db = mongoose.connection;

	db.on("error", function(err) {
	  console.log("Mongoose Error: ", err);
	});

	db.once("open", function() {
	  console.log("Mongoose connection successful.");
	});

//ROUTES AND CRUD
	app.get('/', function(req, res, next) {
	  res.sendFile(path.join(__dirname, "/public/index.html"));
	});

	//CREATE USER
	app.post("/api/user", function(req, res) {
	  User.create({
	    Name: req.body.username
	  }, function(err) {
		if (err) {
		  console.log(err);
		}
		else {
		  res.send("Saved User");
		}
	  });
	});

	//DISPLAY ALL VEG
	app.get("/api/veg", function(req, res, next) {
		Veg.find({}).sort([
    		["VegName", "descending"]
  		]).exec(function(err, doc) {
    		if (err) {
      		  console.log(err);
    		}
		    else {
		      res.send(doc);
		    }
  		});
	});

	//DISPLAY ALL USER VEG
	app.get("/api/userveg", function(req, res, next) {
		User.find({
			"Garden": true
		}).exec(function(err, doc) {
    		if (err) {
      		  console.log(err);
    		}
		    else {
		      res.send(doc);
		    }
  		});
	});

	//ADD VEG TO USER'S GARDEN
	app.put('/api/userveg', function(req, res, next) {

		var newVeg = this._id;

		newVeg.save(function(error, doc) {
			if (error) {
				console.log(error);
			}
			else {
				User.findOneAndUpdate({"_id": req.params.id}, "Garden": doc._id})
				.exec(function(err, doc) {
					if (err) {
						console.log(err);
					}
					else {
						res.send(doc);
					}
				});
			}
		});

	});

	//REMOVE VEG FROM USER'S GARDEN
	app.delete('/api/userveg', function(req, res, next) {

		User.remove({"Garden":{"_id": this._id}};

	});

// catch 404 and forward to error handler
	app.use(function(req, res, next) {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	});

// error handler
	app.use(function(err, req, res, next) {
	  // set locals, only providing error in development
	  res.locals.message = err.message;
	  res.locals.error = req.app.get('env') === 'development' ? err : {};

	  // render the error page
	  res.status(err.status || 500);
	  res.json(res.locals.error);
	});

// module.exports = app;

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
