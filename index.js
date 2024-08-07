const express = require("express");
const app = express();
const newRouter = require("./routes/New");
const controller = require("./controllers/NewController.js");
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

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// uncomment after implementing database
// app.use("/new", newRouter);

app.get("/", (req, res) => {
  res.render("pages/index", { messages });
});
app.get("/new", controller.get);
//uncomment after implementing database
// app.post("/new", controller.post);
app.post("/new", (req,res)=>{
  messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
  res.redirect("/")
})
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
