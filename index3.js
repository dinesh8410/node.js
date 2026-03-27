const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.post("/about", (req, res) => {
  res.send(req.body);
});

app.get("/host", (req, res) => {
  res.send(req.hostname);
});

app.get("/ip", (req, res) => {
  res.send(req.ip);
});

app.get("/ips", (req, res) => {
  res.send(req.ips);
});

app.get("/path", (req, res) => {
  res.send(req.path);
});

app.get("/protocol", (req, res) => {
  res.send(req.protocol);
});

app.get("/query", (req, res) => {
  res.send(req.query);
});

app.get("/subdomains", (req, res) => {
  res.send(req.subdomains);
});

app.get("/method", (req, res) => {
  res.send(req.method);
});

app.get("/originalUrl", (req, res) => {
  res.send(req.originalUrl);
});

app.get("/secure", (req, res) => {
  res.send(req.secure);
});

app.get("/xhr", (req, res) => {
  res.send(req.xhr);
});

app.get("/route", (req, res) => {
  res.send(req.route);
});

app.get("/cookies", (req, res) => {
  res.send(req.cookies);
});

app.get("/about/:userid", (req, res) => {
  if (req.accepts("html")) {
    res.send(`<h1>About User ${req.params.userid}</h1>`);
  } else if (req.accepts("json")) {
    res.json({ message: `About User ${req.params.userid}` });
  } else {
    res.type("txt").send(`About User ${req.params.userid}`);
  }
});
