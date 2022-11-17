require('dotenv').config()

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.API_KEY}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.yelp.com/v3/businesses/search?location=60634", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// ${process.env.API_KEY}