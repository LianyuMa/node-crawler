'use strict';

const http = require('http');

module.exports = (url, callback) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => callback(data));
    }).on('error', () => callback(null));
};
