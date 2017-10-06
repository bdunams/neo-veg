//REQUIREMENTS
	var express = require('express');
	var path = require('path');
	var favicon = require('serve-favicon');
	var logger = require('morgan');
	var cookieParser = require('cookie-parser');
	var bodyParser = require('body-parser');
	var mongoose = require("mongoose");
	var passport = require('passport');
    const session = require('express-session');
    
  // App Authentication (Google OAuth 2.0)
const googleOAuth2 = require('./authentication/googleOAuth2');

// Email
const email = require('./email');

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



// Initialize Express Sessions
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());


// Global Variables
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next()
});


//REQUIRE MODELS//
	var User = require("./models/user.js");
	var Veg = require("./models/veg.js");

// MONGODB CONFIGURATION//
	mongoose.connect("mongodb://heroku_mgttgtwr:l51l75o0rctpnla8npkq02tdd@ds111535.mlab.com:11535/heroku_mgttgtwr", {
		useMongoClient: true
	});
	// Dev mongodb://localhost/neoveg
	// Prod mongodb://heroku_mgttgtwr:l51l75o0rctpnla8npkq02tdd@ds111535.mlab.com:11535/heroku_mgttgtwr
	var db = mongoose.connection;

	db.on("error", function(err) {
	  console.log("Mongoose Error: ", err);
	});

	db.once("open", function() {
	  console.log("Mongoose connection successful.");
	});

//ROUTES AND CRUD
	

	// GET /auth/google
	//   Use passport.authenticate() as route middleware to authenticate the
	//   request.  The first step in Google authentication will involve
	//   redirecting the user to google.com.  After authorization, Google
	//   will redirect the user back to this application at /auth/google/callback
	app.get('/auth/google',
	  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email'] }));


	// GET /auth/google/callback
	//   Use passport.authenticate() as route middleware to authenticate the
	//   request.  If authentication fails, the user will be redirected back to the
	//   login page.  Otherwise, the primary route function function will be called,
	//   which, in this example, will redirect the user to the home page.
	app.get('/auth/google/callback', 
	  passport.authenticate('google', { failureRedirect: '/' }),
	  function(req, res) {
	    res.redirect('/');
	  });

    // GET LOGOUT
    app.get('/logout', function(req, res){
      req.logout();
      res.redirect('/');
    });

    // GET the current user 
    app.get("/user", function(req, res, next) {

		res.json({user: req.user});
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
    		["VegName", "ascending"]
  		]).exec(function(err, doc) {
    		if (err) {
      		  console.log(err);
    		}
		    else {
              
		      res.json({vegetables: doc});
		    }
  		});
      
	});

	//DISPLAY ALL USER VEG
	app.get("/api/user-veg", function(req, res, next) {
      console.log('GET MY GARDEN', req.user)
      if(req.user){
        
        User.findOne({ _id : req.user._id })
          .populate("Garden")
          .exec(function(err, user) {
            console.log("WITH GARDEN",user)
    		if (err) {
      		  console.log(err);
    		}
		    else {
		      res.json({ Garden: user.Garden });
		    }
  		});
        
      }
      else{
        // No user is logged in
        res.json({ user: false });
      }
      
		
	});

//ADD VEG TO USER'S GARDEN
	app.post('/api/add-to-garden', function(req, res, next) {

	  //check if user is logged in
      if(req.user){
        Veg.findOne({ VegName: req.body.vegetableName})
        .exec(function(err, doc) {
    		if (err) {
      		  console.log(err);
    		}
		    else {
		      User.findOne({_id : req.user._id})
		        .exec(function(err, user){
			      if (err) {
			          console.log(err);
			        }
			        //check each veg id in user's garden for any matches to the veg selected
			        else {
			        	let hasGarden = user.Garden.reduce((carry, next) => {

			        		if( carry ) 
			        			return carry;

			        		if( next.toString() === req.body.vegId )
			        			return next;

			        		return carry;
			        	}, null);

		        		//if the vegetable has an existing match in the user's garden
		        		if( hasGarden ){
		        			console.log("This vegetable is already in your garden.");
		        		}
		        		//if the vegetable had not yet been added, add it
		        		else {
		        			User.findOneAndUpdate({ _id : req.user._id }, { $push: { "Garden": req.body.vegId }})
			                .exec(function(err, doc) {
			                    if (err) {
			                        console.log(err);
			                    }
			                    else {
			                        res.json(doc);
			                    }
			                });
		        		}
            		}
        		});            
      		}
      	});
      }
      else{
        // No user is logged in
        res.json({ user: false });
      }

	});

	//REMOVE VEG FROM USER'S GARDEN
	app.post('/api/remove-from-garden', function(req, res, next) {
		// console.log("vegid:" + req.body.vegId);
		// console.log("user:" + req.user._id);

		User.findOneAndUpdate({"_id": req.user._id}, { $pull: { "Garden": req.body.vegId} }, function(err, data){
			if(!err){
				res.json(data);
			}
		});

	});

	//ADD DATES TO USER'S CALENDAR


  app.use('/', function(req, res, next) {
      console.log(req.user, "REQ.USER");
      console.log('HOME ROUTE')
	  res.sendFile(path.join(__dirname, "/public/index.html"));
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


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
