const http = require("http");
const data = require("./data");
const server = http.createServer((req, res) => {
  console.log("hello ji ");
  res.setHeader("dum", "0");
  res.writeHead(200, { "content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
});
server.listen(5000);
