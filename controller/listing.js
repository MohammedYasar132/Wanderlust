const Listing = require("../models/listing.js");
const axios = require('axios');

module.exports.index = async (req, res) => {
  const allListings = await Listing.find();
  res.render("listings/index.ejs", { allListings });
};

module.exports.RenderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// Export a function to show a listing
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not Exists!");
    res.redirect("/listings");
  } else {
    // Otherwise, render the show.ejs page with the listing
    res.render("listings/show.ejs", { listing });
  }
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  let { listing } = req.body;
  let newListing = new Listing(listing);
  newListing.owner = req.user._id;
  newListing.image = {url , filename};
  await newListing.save();
  req.flash("success", "New Listing Added");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not Exists!");
    res.redirect("/listings");
  }
  originalUrl = listing.image.url.replace("upload","upload/h_200,w_250");
  res.render("listings/edit.ejs", { listing , originalUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if(req.file){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url , filename};
    await listing.save();
  }
  req.flash("success", "Updated Successfully");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted Successfully");
  res.redirect("/listings");
};
