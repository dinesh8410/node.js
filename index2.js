const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// ejs--

// to render a ejs file
// app.set("view engine", "ejs");

// app.get("/user", (req, res) => {
//   res.render("user");
// });

//to download a file

// app.get("/download", (req, res) => {
//   res.download("./file/react resume.pdf", "my_resume.pdf");
// });

app.get("/download", (req, res) => {
  res.sendFile(__dirname + "/file/react resume.pdf");
});

app.get("/end", (req, res) => {
  res.write("Hello World");
  res.end();
});

app.get("/error", (req, res) => {
  res.status(404).send("Page not found");
});

app.get("/check", (req, res) => {
  res.set("custom-header", "This is a custom header");
  console.log(res.get("custom-header")); // To verify that the header is set
  res.send("Custom header set");
});
