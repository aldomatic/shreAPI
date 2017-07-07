/*
    USE THIS HANDY FILE TO AUTO MIGRATE (DESTROY AND RECREATE) THE MODELS. USE FOR DEV ONLY!!
*/
var server = require('./server');
var ds = server.dataSources.pgDB;
var lbTables = ['User', 'CoffeeShop'];
ds.automigrate(lbTables, function(er, result) {
  if (er) {
      throw er;
  } else {
      console.log("Performed automigration.");
  }
  ds.disconnect();
});