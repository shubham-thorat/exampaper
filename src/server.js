const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
   res.send("Connected With Server");
});

app.use('/',require('./Routes/pages'))
app.use('/api',require('./Routes/api'))
// app.listen(port, () => {
//    console.log(`Server is up at ${port}`);
// });

module.exports = {
    app
};