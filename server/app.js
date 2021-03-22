const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const products = [ 
  {
    "id": 1,
    "name": "Chicken",
    "price": 2.00
  },
  {
    "id": 2,
    "name": "Pork",
    "price": 2.50
  },
  {
    "id": 3,
    "name": "Beef",
    "price": 5.25
  }
]

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('content-type', 'application/json')

  if (req.method !== 'GET') {
      res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
  } else {
      if (req.url === '/api/v1/products') {
        res.end(JSON.stringify(products))
      }
  }
  res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});