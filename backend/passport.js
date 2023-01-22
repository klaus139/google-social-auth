const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const dotenv = require("dotenv");
dotenv.config();


passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);

		}
	)
);

// 1e95fb9b-0494-4a20-9228-dbac29b8c33d
// SHA256:vw2+XzsOuJVBCp5VF4PzBpqj/NxLPdPjSydJMmutbqE=



passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
        
      },
      function (accessToken, refreshToken, profile, callback) {
        callback(null, profile);
      }
    )
);

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: "/auth/facebook/callback",
            profileFields: ['id', 'displayName', 'photos', 'email']
        },
        function (accessToken, refreshToken, profile, callback) {
            callback(null, profile);
        }
    )
);




passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});