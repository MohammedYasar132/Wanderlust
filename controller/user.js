const User = require("../models/user.js");

// Render the signup form to the user
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

// Create a new user and register them
module.exports.signup = async (req, res) => {
  try {
    let { username, password, email } = req.body;
    let newUser = new User({ email, username });
    let registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) {
        return next();
      }
      req.flash("success", "Welcome to Wanderlust");
      res.redirect("/listings");
    });
  } catch (err) {
    // If there is an error, flash an error message and redirect to the signup page
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

// Render the login form to the user
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

// Log in the user and redirect to the listings page
module.exports.login = async (req, res) => {
  req.flash("success", "Welcome back to Wanderlust");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

// Log out the user and redirect to the listings page
module.exports.logout = async (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You logged out successfully");
    res.redirect("/listings");
  });
};
