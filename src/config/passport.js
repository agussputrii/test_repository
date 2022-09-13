const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // Import LocalStrategy from passport-local

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    // Match Email's User
    const user = await User.findOne({email: email});
    if (!user) { // If user does not exist
        return done(null, false, {message: 'Not User Found'});
    } else {
        // Match Password's User
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user);
        } else { // If password does not match
            return done(null, false, {message: 'Incorrect Password'});
        }
    }
}));

// Serialize and Deserialize User
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});