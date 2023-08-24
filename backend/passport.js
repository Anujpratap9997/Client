const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "868193405340-6iog94k914sod33rtqmajf64b45ekl70.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "80de748f8d33a6dcba78";
GITHUB_CLIENT_SECRET = "03a246163b2fd7a9ac8d7204ebf1409273dbc2ea";

FACEBOOK_APP_ID = "2055083824846171";
FACEBOOK_APP_SECRET = "adf3bb4f07eff8d83b0e34395c5f027e";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});