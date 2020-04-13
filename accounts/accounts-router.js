const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .orderBy("budget")
    .limit(5)
    .then(account => {
      res.status(200).json({ data: account });
    })
    .catch(err => {
      res.status(500).json({ message: "Unexpected error", err });
    });
});

router.get("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .first()
    .then(account => {
      if (account) {
        res.status(200).json({ data: account });
      } else {
        res.status(404).json({ message: "Could not find data requested" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Unexpected error", err });
    });
});

router.post("/", (req, res) => {
  db("accounts")
    .insert(req.body, "id")
    .then(ids => {
      res.status(201).json({ results: ids });
    })
    .catch(err => {
      res.status(500).json({ message: "Could not post data", err });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;

  db("accounts")
    .where({ id: req.params.id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "account updated" });
      } else {
        res
          .status(404)
          .json({ message: "cant update because post doesnt exist" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "unexpected error", err });
    });
});

router.delete("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "account deleted" });
      } else {
        res
          .status(404)
          .json({ message: "could not find account with that ID" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "unexpected error", err });
    });
});

module.exports = router;
