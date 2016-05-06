const getURL = require('./lib/geturl');

const url = 'http://www.cbc.ca/news/canada/manitoba/province-of-manitoba-to-overhaul-wetland-strategy-with-new-bill-1.3333333';

getURL(url, (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('error');
  }
});
