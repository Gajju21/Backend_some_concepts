// const http = require("http");
// const data = require("./data");
// const server = http.createServer((req, res) => {
//   console.log("hello ji ");
//   res.setHeader("dum", "0");
//   res.writeHead(200, { "content-Type": "application/json" });
//   res.write(JSON.stringify(data));
//   res.end();
// });
// server.listen(5000);

const fs = require("fs");
const path = require("path");

const dirpath = path.join(__dirname, "crud");

const filepath = `${dirpath}/orange.txt`;

//  create
// fs.writeFileSync(filepath, "this is a text file");

// rename
// fs.rename(filepath, `${dirpath}/orange.txt`, (err) => {
//   if (!err) console.log("file is updated");
// });

// update
// fs.appendFile(filepath, " and the file name is orange.txt", (err) => {
//   if (!err) console.log("file is updated");
// });

//read
// fs.readFile(filepath, "utf8", (err, item) => {
//   console.log(item);
// });

//delete
fs.unlinkSync(filepath);

// fs.writeFileSync(`${dirpath}/apple.txt`,'this is a text file')
