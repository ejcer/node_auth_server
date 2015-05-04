// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
	'facebookAuth' : {
		'clientID' : '632013563566806', // App ID
		'clientSecret' : '6b1d679bdf2724efc044ed09dd0b40b7', // App Secret
		'callbackURL' : 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey'       : 'hN9I9NmiwsCA1HdwCacj1GdRU',
        'consumerSecret'    : 'VpUy7rlQ3fTv6oQjGUGsRSXyWK9edCA1MPBy7NVrkXTfBPBecG',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID'      : '841807115243-tj9k96mced2nat11dn8j1vciqtidl4qk.apps.googleusercontent.com',
        'clientSecret'  : 'eQYHxDSkoqVds4M9THlr8Vfr',
        'callbackURL'   : 'http://127.0.0.1:8080/auth/google/callback'
	}
};