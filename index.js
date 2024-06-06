const express = require("express");
const app = express();
const userRoutes = require('./routes/user');

// begin middleware
const middleware = function (req, res, next) {
  console.log("I am middleware");
  next();
};
app.use(middleware);
// end middleware

// connect html file
app.use(express.static('public'));

// mount userRoutes
app.use('/user', userRoutes);

// add port instructions
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
  });

// Routes
app.get("/", (req, res) => {
    res.send("Hello Express!");
  });
  
  app.get("/express", (req, res) => {
    res.send("Creating routes with Express is simple!");
  });
  
  app.get("/user", (req, res) => {
    res.send("Received a GET request for user!");
  });
  
  app.post("/user", (req, res) => {
    res.send("Received a POST request for user!");
  });

  console.log("----------SUCCESS ----------");

