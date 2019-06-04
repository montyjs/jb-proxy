const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Product Redirecting
app.get('/images', (req, res) => {
  res.redirect('http://mg-product-wrapper-dev.us-west-2.elasticbeanstalk.com/images')
});

app.get('/products', (req, res) => {
  res.redirect('http://mg-product-wrapper-dev.us-west-2.elasticbeanstalk.com/products')
});

// Description Redirecting
app.get('/descriptions', (req, res) => {
  res.redirect('http://jb-description-dev.us-west-2.elasticbeanstalk.com/descriptions')
});

app.get('/mensSizes', (req, res) => {
  res.redirect('http://jb-description-dev.us-west-2.elasticbeanstalk.com/mensSizes')
});

app.get('/womensSizes', (req, res) => {
  res.redirect('http://jb-description-dev.us-west-2.elasticbeanstalk.com/womensSizes')
});

app.get('/euSizes', (req, res) => {
  res.redirect('http://jb-description-dev.us-west-2.elasticbeanstalk.com/euSizes')
});

// Reviews Redirecting
app.get('/reviews', (req, res) => {
  res.redirect('http://reviews-1.us-west-2.elasticbeanstalk.com/reviews')
});



app.listen(3000, err => {
  if (err) {
    return console.log(err);
  }
  console.log('You are connected to the proxy on port 3000')
});

app.listen(3001, err => {
  if (err) {
    return console.log(err);
  }
  console.log('You are connected to the proxy on port 3001')
});

app.listen(3002, err => {
  if (err) {
    return console.log(err);
  }
  console.log('You are connected to the proxy on port 3002')
});

app.listen(3003, err => {
  if (err) {
    return console.log(err);
  }
  console.log('You are connected to the proxy on port 3003')
});
