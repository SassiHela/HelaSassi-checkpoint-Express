const express = require("express");
const app = express();
const PORT = 3000;
var router = express.Router();

//Style css
app.use(express.static('public'));

app.set("view engine", "pug");
app.set("views", "./Views");

app.listen(PORT, () =>
  console.log(`Express server currently running on port ${PORT}`)
);

//middleware  to set the availability of the web application
router.use(function (req, res, next) {
  var date = new Date();
  var hour = date.getHours();
  var day = date.getDay();

  //0: sunday 1:monday  2: tuesday  3:wednesday  4:thursday  5: friday  6:saturday
  if (day === 0 || day === 6 || hour < 9 || hour > 17) {
    res.render("503");
  }
  next();
});
router.get("/", (request, response) => {
  response.render("Home");
});
router.get("/services", (request, response) => {
  response.render("Services");
});

router.get("/contact", (request, response) => {
  response.render("Contact");
});

app.use("/", router);
