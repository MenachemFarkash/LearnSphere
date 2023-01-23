const express = require("express");
const router = express.Router();
const db = require("../model/db");

const { showAllSubjects } = require("../controllers/subjects");

router.route("/").get(showAllSubjects);

module.exports = router;
