const mongoose = require('mongoose');
 module.exports.connexion=function()
 {
 mongoose.connect('mongodb://localhost:27017/inventory')
 .then(function()            
 {
   console.log("mongo is connected")
 })
 .catch(function(err)
 {
   console.log(err+"error ocuured")
 })
 }
 