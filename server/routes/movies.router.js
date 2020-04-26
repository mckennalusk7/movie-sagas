const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

//  GET ROUTE
router.get("/", (req, res) => {
  const queryText = 'SELECT * FROM "movies"';

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error completing SELECT movies query", err);
      res.sendStatus(500);
    });
});

modules.exports = router;
