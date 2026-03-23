const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send({
//     name: "Dinesh Kumar",
//     age: 30,
//     city: "New York",
//   });
// });

// app.get("/", (req, res) => {
//   const users = [
//     { name: "Dinesh Kumar", age: 30, city: "New York" },
//     { name: "John Doe", age: 25, city: "Los Angeles" },
//     { name: "Jane Smith", age: 28, city: "Chicago" },
//   ];
//   res.json(users);
// });

// app.get("/about", (req, res) => {
//   res.redirect("/users");
// });

app.get("/about", (req, res) => {
  res.redirect("http://www.google.com");
});

app.get("/users", (req, res) => {
  res.send("<h1>User Page</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
