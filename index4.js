const express = require("express");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/user", (req, res) => {
  res.send("User Page");
});

// app.get("/about", (req, res) => {
//   let items = ["Node.js", "Express", "EJS"];
//   res.render("about", {
//     title: "About Us",
//     message: "Welcome to the about page!",
//     items: items,
//   });
// });

app.get("/about", (req, res) => {
  var users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];
  res.render("about", {
    title: "About Us",
    message: "Welcome to the about page!",
    users: users,
  });
});
