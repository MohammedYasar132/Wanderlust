const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isListingOwner,validateListing} = require("../middileware.js");
const listingController = require("../controller/listing.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(listingController.createListing));
    // .post(upload.single("listing[image]"),(req,res)=>{
    //     res.send(req.file)
    // })

//New Route
router.get("/new",isLoggedIn,listingController.RenderNewForm)

router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn,isListingOwner, validateListing ,wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isListingOwner, wrapAsync(listingController.deleteListing))

//edit Route
router.get("/:id/edit",isLoggedIn,isListingOwner,wrapAsync(listingController.renderEditForm))

module.exports = router;