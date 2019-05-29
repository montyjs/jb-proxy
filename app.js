const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(3333, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('listening on port 3333')
})
