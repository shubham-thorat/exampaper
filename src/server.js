const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
   res.send("Connected With Server");
});

// app.listen(port, () => {
//    console.log(`Server is up at ${port}`);
// });

module.exports = {
    app
};