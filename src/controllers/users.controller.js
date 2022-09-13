const usersCtrl = {};

const passport = require('passport');

// Export the controller to use User model
const User = require('../models/User');

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    const errors = [];
    const {name, email, password, confirm_password} = req.body;
    if (password != confirm_password) { // Check if password and confirm_password are the same
        errors.push({text: 'Passwords do not match'});
    }
    if (password.length < 4) { // Check if password is at least 4 characters long
        errors.push({text: 'Password must be at least 4 characters'});
    }
    if (errors.length > 0) { // If there are errors
        res.render('users/signup', {
            errors,
            name,
            email,
            password,
            confirm_password
        });
    } else {
        const emailUser = await User.findOne({email: email})
        if (emailUser) { // If email already exists
            req.flash('error_msg', 'The Email is already in use');
            res.redirect('/users/signup');
        } else { // If email does not exist yet
            const newUser = new User({name, email, password});
            newUser.password = await newUser.encryptPassword(password); // Encrypt password
            await newUser.save();
            req.flash('success_msg', 'You are registered successfully');
            res.redirect('/users/signin');
            console.log(req.body); // to see what is returned of the form
        }
    }
};

usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
});

usersCtrl.logout = (req, res) => {
    res.send('logout');
};

module.exports = usersCtrl;