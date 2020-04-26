const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

//  GET ROUTE to get movie from database
router.get("/movie", (req, res) => {
  const queryText = `SELECT * FROM "movies"
  ORDER BY "id";`;

  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error completing SELECT movies query", err);
      res.sendStatus(500);
    });
});

// GET ROUTE to get genre and movie details from database
router.get("/details/:id", (req, res) => {
  const queryText = `SELECT * FROM movies WHERE id=$1 GROUP BY "movies.id`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR in completing SELECT movies query", err);
      res.sendStatus(500);
    });
});

modules.exports = router;
