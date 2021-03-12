const { app } = require('./server')
const { db } = require('./Models/db')
var bodyParser = require('body-parser');
const port = 3000;
const hostname = '127.0.0.1';

async function run() {
  // try{ await db.sync(); } catch(err) { console.log(err); }
  app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  var myData = new newuser(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.post("/", (req, res) => {
  var myData = new user(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.post("/", (req, res) => {
  var myData = new commetuser(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

run();