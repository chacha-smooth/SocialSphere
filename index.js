const express = require("express");
const app = express();
const newRouter = require("./routes/New");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.set("view engine", "ejs")
app.use("/new", newRouter);

const PORT = 3000;

app.listen(PORT, ()=>console.log(`Listening at ${PORT}`));