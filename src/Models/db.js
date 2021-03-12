const mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/exampaper', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database is ready");
});

const newuserSchema = new mongoose.Schema({
  name : String,
  age : String,
  email : String,
  username: {type : String, required:true, maxLength:30,allowNull : true},
  password : {type :String, minLength:8,allowNull : true }
});
var newuser = mongoose.model("User_1", newuserSchema);

const userSchema = new mongoose.Schema({
  username: {type : String, required:true, maxLength:30,allowNull : true},
  password : {type :String, minLength:8 ,allowNull : true}
});
var user = mongoose.model("User_2", userSchema);

const commentSchema = new mongoose.Schema({
  title : { type : String , maxLength:50 },
  message : String,
  date : String
});
var commentuser = mongoose.model("User_3", commetSchema);


// post request 

module.exports = {
  db,
  newuser,
  user,
  commentuser
}