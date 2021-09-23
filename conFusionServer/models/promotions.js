const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Will add the Currency type to the Mongoose Schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

 const PromotionsSchema = new Schema( {
     name: {
         type: String,
         required : true
     },
     image : {
         type: String,
         required : true
     },
     label : {
         type: String,
         default: ''
     },
     price:{
         type: Currency,
         require: true,
         min: 0
     },
     description:{
         type: String
     },
     featured: {
         type: Boolean
     } 
 });

 const Promotions = mongoose.model('Promotions',PromotionsSchema);

 module.exports = Promotions;