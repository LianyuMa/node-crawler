const request = require('request');

// const getURL = require('./lib/geturl');

// const url = 'http://www.cbc.ca/news/canada/manitoba/province-of-manitoba-to-overhaul-wetland-strategy-with-new-bill-1.3333333';
const url = 'https://github.com/integrations';

// getURL(url, (data) => {
//   if (data) {
//     console.log(data);
//   } else {
//     console.log('error');
//   }
// });

request({
  method: 'GET',
  url,
}, (err, response, body) => {
  if (err) return console.error(err);
  console.log(body);
});
