const express = require('express');
const router = express.Router();

// middleware
router.use((req, res, next) => {
    console.log("Middleware to see time of user request: ", Date.now());
    next();
});

router
.route("/")
.get((req, res) => {
    res.send("Made it to user route");
})
.post((req, res) => {
    res.send("create user");
})
.delete((req, res) => {
    res.send("Delete user");
});

    router.get("/:userID/profile/:data")
    .get((req, res) => {
        res.send(`Navigated to the user profile page for ${req.params.userID} with the data: ${req.params.data}`)
    });

    router.get("/:userID/profile")
    .get((req, res) => {
        res.send(`Navigated to the user profile page for: ${req.params.userID}`)
    });

    router.get("/:userID")
    .get((req, res) => {
        res.send(`Navigated to the user page for: ${req.params.userID}`)
    });

    module.exports = router