/*
    USE THIS TO UPDATE EXISTING MODELS 
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