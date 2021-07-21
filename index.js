const { User } = require("./models/User");
const express = require("express");
const app = express();
const port = 3000;

const users = [new User("Joni", 28)];

app.use(express.json());

app.get("/user", (req, res) => {
  res.json(users);
});

app.post("/user", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status("400").json({ error: "Invalid user" });
  }

  users.push(new User(name, age));

  return res.json({ message: "User created" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
