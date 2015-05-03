// app/routes.js

module.exports = function(app, passport){

	//home page (/)
	//login page (/login)
		//POST
	//signup page (/signup)
		//POST
	//profile page after logged in


	// =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
    	res.render('index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res){
    	// render the page and pass in any flash data if it exists
    	res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res){
    	res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // protected so that you have to be loggedin to visit
    // uses route middleware to verify this (the isLoggIn function)
    app.get('profile', isLoggedIn, function(req, res){
    	res.render('profile.ejs', {
    		user : req.user // get the user out of passport session and pass to template
    	});
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res){
    	req.logout();
    	res.redirect('/');
    });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next){

	// if user is authenticated in the session, carry on
	if(req.isAuthenticated()){
		return next();
	}

	// if they aren't redirect them to the home page
	res.redirect('/');
}

