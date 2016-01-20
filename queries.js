var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config.js');


/* Fill out these functions using Mongoose queries*/
    mongoose.connect(config.db.uri);

var findLibraryWest = function() {

    Listing.find({name: 'Library West'}, function(err, item) {
        if (err) throw err;

        console.log(item);
    });
};

var removeCable = function() {
    // find and remove cabl
    Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
      if (err) throw err;

      // we have deleted the listing
      console.log('Listing deleted!');
});
};
var updatePhelpsMemorial = function() {

    Listing.findOneAndUpdate( {address: '701 N Broadway, Sleepy Hollow, NY 10591, United States' }, { address: '102 Phelps Lab, Gainesville, FL 32611'}, function(err,item) {
        if (err) throw err;

        console.log(item);
    });

    Listing.find({code: "PHL"}, function(err, item) {
        if (err) throw err;

        console.log(item);
    });
};

var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
    Listing.find({}, function(err, item) {
        if (err) throw err;

        console.log(item);
    });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
