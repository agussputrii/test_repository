const helpers = {};

// Function to protect routes
helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'You are not logged in');
    res.redirect('/users/signin');
}

// Export helpers
module.exports = helpers;