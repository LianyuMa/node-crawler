const request = require('request');
const cheerio = require('cheerio');

// const getURL = require('./lib/geturl');

// const url = 'http://www.cbc.ca/news/canada/manitoba/province-of-manitoba-to-overhaul-wetland-strategy-with-new-bill-1.3333333';
const url = 'http://www.cbc.ca/news';

// getURL(url, (data) => {
//   if (data) {
//     console.log(data);
//   } else {
//     console.log('error');
//   }
// });

// fetching topstory list of CBC
request({
  method: 'GET',
  url,
}, (err, response, body) => {
  if (err) return console.error(err);
  const $ = cheerio.load(body);
  $('.topstory').each((index, e) => {
    const content = $(e).children().first().text().trim();
    console.log(`${content}\n`);
  });
});
