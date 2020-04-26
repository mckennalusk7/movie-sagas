const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

//  GET ROUTE to get movie from database
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "movies"
  ORDER BY "id";`;

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

// GET ROUTE to get genre and movie details from database
router.get("/details/:id", (req, res) => {
  const queryText = `SELECT * FROM movies WHERE id=$1 GROUP BY "movies.id`;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR in completing SELECT movies query", err);
      res.sendStatus(500);
    });
});

//  PUT ROUTE for movies to be updated in the database
router.put("/", (req, res) => {
  const updatedMovie = req.body;

  const queryText = ` UPDATE "movies" 
    SET "title" = $1,
    "description" =$2,
    WHERE id=$3;`;

  const queryValues = [
    updatedMovie.title,
    updatedMovie.description,
    updatedMovie.id,
  ];

  pool
    .query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("error in completing movies query", err);
      res.sendStatus(500);
    });
});

module.exports = router;
