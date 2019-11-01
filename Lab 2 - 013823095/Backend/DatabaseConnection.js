const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/HomeAway');
mongoose.connect('mongodb+srv://mahesh:Mahesh1896@273-nu1yk.mongodb.net/test?retryWrites=true&w=majority');

var Userdetails = mongoose.model('Userdetails', {

    'Email' : {
        type: String,
        required: true
    },
    'Password' : {
        type: String,
        required: true
    },
    'FirstName' : {
        type: String,
        required: true
    },
    'LastName' : {
        type : String,
        required: true
    },
    'ProfileImage' : {
        type : String,
        required: true
    },
    'PhoneNumber' : {
        type : String,
        required: true
    },
    'Address' : {
        type : String
    },
    'AccountType' : {
        type : Number
    },
    'RestaurantDetails' : {
        type: Array
    },
    'Orderdetails' : Array,
    'ProfileId' : String
});


var RestaurantDetails = mongoose.model('RestaurantDetails', {    
    'ResId' : String,
    'ResName' :String,
    'Cuisine' : String,
    'Description' : String,
    'Address' :String,
    'ResZipcode' : String,
    'Locations' :String,
    'ResImage' :String,
    'Ownername' : String,
    'OwnerId' : String,
    'ResMenu' : {
        type: Array
      }
});

var OrderDetails = mongoose.model('OrderDetails', {
    'ResId' : String,
    'ResName' : String,
    'ItemName' : String,
    'ItemQuantity' : Number,
    'ItemPrice': Number,
    'TotalCost' : String,
    'Ownername' : String,
    'Buyername' : String,
    'OrderStatus' : String,
    'BuyerId' : Number
});

var MessageCollection = mongoose.model('MessageCollection',{
    'RestaurantId' : String,
    'BuyerId' : String,
    'OwnerId' : String,
    'Message' : JSON,
    'MessageId': String
});

module.exports = {
    Userdetails,
    RestaurantDetails,
    OrderDetails,
    MessageCollection
};
