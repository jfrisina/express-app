const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require('./routes/user');

app.use('/user,', userRoutes);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
  });

  // begin middleware
  const logReq = function (req, res, next) {
    console.log("Request Received");
    next();
  };
  
  app.use(logReq);
  // end middleware
  
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

  console.log("----------SUCCESS ---------");

