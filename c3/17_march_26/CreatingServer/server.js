const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the homepage!');
    }
    else if (req.url === '/about') {
        res.end('This is the about page.');
    } else if (req.url === '/contact') {
        res.end('This is the contact page.');
    } else {
        res.end('Page not found.');
    }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});