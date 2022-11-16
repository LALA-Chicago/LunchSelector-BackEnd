// var tableBody = document.getElementById('repo-table');
// var fetchButton = document.getElementById('fetch-button');

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer -T6hXJUxnXjTEDFQC5ALlQrrbcoNYYdHHtVN7RFiFJVndJdFp9U_XM7EkJUIZ0Ct3hMg0ScdIHE_2Ze5sPSj-OWncv_qCvP-PKyDQF7zYy2vRNFvmRUns07tfv7VYnYx");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.yelp.com/v3/businesses/search?location=60634", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// fetchButton.addEventListener('click', getApi);

