const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  const response = await fetch("https://api.weather.gov/gridpoints/LOT/76,73/forecast/hourly")
  const data = await response.json()

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(data.properties.periods[0].temperature));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});