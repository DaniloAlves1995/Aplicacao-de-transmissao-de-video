const express = require('express');
const path = require('path');

const app = express();
console.log("REACT_API = "+process.env.API_URL);
const port = process.env.API_URL || 8080;


// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/dist'));

//app.use(express.static(path.join(__dirname, '/src')));
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port);