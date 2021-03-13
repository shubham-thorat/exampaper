const { app } = require('./server')
const { db, newuser, user,commentuser } = require('./Models/db')
const { persondata, commentdata } = require('../scripts/speed_sampledata')
const models = require('../src/Models/db')

var bodyParser = require('body-parser');
const port = 3000;
const hostname = '127.0.0.1';

async function run() {
  // try{ await db.sync(); } catch(err) { console.log(err); }
  app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post("/Sign_up", (req, res) => {

  let myData = new newuser(req.body);
  if (user.find({ username: myData.username }, { username: 1 })) {
    res.send("Username Already Exists");
  }
  else {
    myData.save('NewUser', function (err, message) {
      if (err) {
        console.log("Error occured");
      }
      else {
        console.log("Saved Succefully");
      }
    })
  }

});

app.post("/login", (req, res) => {
  let myData = new user(req.body);
  if (user.find({ username: myData.username, password: myData.password }, { username: 1, password: 1 })) {
    myData.save('User', function (err, message) {
      if (err) {
        console.log("Error occured");
      }
      else {
        console.log("Saved Succefully");
      }
    })
  }
  else res.send("Incorrect Username or Password");

});


app.post("/Discuss", (req, res) => {

  let myData = new commentuser(req.body);
  myData.save('CommentUser', function (err, message) {
    if (err) {
      console.log("Error occured");
    }
    else {
      console.log("Saved Succefully");
    }
  })
});

run();