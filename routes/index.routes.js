const router = require("express").Router();

// GET /
router.get("/", (request, response) => {
  response.json({ message: "Hey, cool guy!!!!!" });
});

// defining what is received
// when this file is called with "require()"
module.exports = router;
