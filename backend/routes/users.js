const express = require("express");
const router = express.Router();
const db = require("../model/db");

const {
    adduser,
    showaUserById,
    showaUserByEmail,
    login,
    showAllUserCourses,
    deleteCourse,
    changePassword,
} = require("../controllers/user");

router.route("/").post(adduser).delete(deleteCourse);
router.route("/courses").post(showAllUserCourses);
router.route("/login").post(login);
router.route("/:id").get(showaUserById);
router.route("/getByEmail").post(showaUserByEmail);
router.route("/changePassword").post(changePassword);

module.exports = router;
