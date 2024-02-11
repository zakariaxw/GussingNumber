const { parse } = require("querystring");

function postRequest(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const formData = parse(body);
    const userGuess = parseInt(formData.input);
    const secretNum = Math.floor(Math.random() * 10) + 1;

    let result;
    if (isNaN(userGuess)) {
      result = "Please enter a valid number.";
    } else if (userGuess > secretNum) {
      result = "Your guess is higher than the secret number.";
    } else if (userGuess < secretNum) {
      result = "Your guess is lower than the secret number.";
    } else if (userGuess === secretNum) {
      result = "Your guess is Correct : Congratulations!!";
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ result }));
  });
}

module.exports = postRequest;
