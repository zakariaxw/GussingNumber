const http = require("http");

const getReq = require("./methods/getRequest");
const postReq = require("./methods/postRequest");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      delReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");

      res.write(
        JSON.stringify({ title: "Not Found", message: "Route Not Found" })
      );
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
});
