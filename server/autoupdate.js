/*
    USE THIS HANDY FILE TO AUTO MIGRATE (DESTROY AND RECREATE) THE MODELS. USE FOR DEV ONLY!!
*/
var server = require('./server');
var ds = server.dataSources.pgDB;
var lbTables = ['CoffeeShop'];
ds.autoupdate(lbTables, function(er, result) {
  if (er) {
      throw er;
  } else {
      console.log("Performed autoupdate.");
  }
  ds.disconnect();
});