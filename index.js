const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Dinesh Kuamr");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.get("/about/:id", (req, res) => {
  res.send(`About page for user: ${req.params.id}`);
});

app.get("/search", (req, res) => {
  const code = req.query.id;
  const name = req.query.name;
  res.send(`User id: ${code} and User name: ${name}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
