const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.end("Welcome To Devurex Agency");
});

app.listen(PORT, () => console.log("Devurex App Is Running On Port: " + PORT));
