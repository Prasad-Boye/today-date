const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let today = new Date();

  response.send(
    `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`
  );
});

module.exports = app;
app.listen(3000);
