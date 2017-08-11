/*
    USE THIS TO UPDATE EXISTING MODELS
*/
var server = require('./server');
var ds = server.dataSources.dev_db;
var lbTables = ['CoffeeShop'];
ds.autoupdate(lbTables, function(er, result) {
  if (er) {
      throw er;
  } else {
      console.log("Performed autoupdate.");
  }
  ds.disconnect();
});
