const express = require("express");
const router = express.Router();
const db = require("../model/db");

const { addCourse, showAllCourses, deleteCourse } = require("../controllers/course");

router.route("/").post(addCourse).get(showAllCourses).delete(deleteCourse);

module.exports = router;
