const express = require("express");
const db = require("../model/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validateUser = require("../model/userSchema");
const secretKey = "secretKey";

exports.addCourse = async (req, res) => {
    try {
        const name = jwt.verify(req.body.token, secretKey);

        const subjectId_Query = `SELECT subject_id FROM subjects WHERE subject = $1;`;
        const subjectName_Values = [req.body.subject];
        const subjectIdResult = await db.query(subjectId_Query, subjectName_Values);

        const getUserIdByName_Query = `SELECT user_id FROM users
        WHERE  name = $1;`;
        const getUserIdByName_Values = [name];
        const user_id = await db.query(getUserIdByName_Query, getUserIdByName_Values);

        let query = `SELECT user_id FROM courseslist WHERE subject_id=$1 and user_id=$2 `;
        values = [subjectIdResult.rows[0].subject_id, user_id.rows[0].user_id];
        let user = await db.query(query, values);
        if (user.rowCount != 0) return res.status(400).send("you are already signd to this course");

        const checkCourseCount_Query = "SELECT COUNT(name) FROM courseslist WHERE name LIKE $1";
        const checkCourseCount_Values = [req.body.subject + "%"];
        const courseCount = await db.query(checkCourseCount_Query, checkCourseCount_Values);

        const ceil = Math.ceil((parseInt(courseCount.rows[0].count) + 1) / 22);

        const insertNewTableRowQuery = `INSERT INTO courseslist (name,user_id,subject_id) VALUES ($1,$2,$3) RETURNING *`;
        const insertNewTableRowValues = [
            req.body.subject + Math.ceil((parseInt(courseCount.rows[0].count) + 1) / 22),
            user_id.rows[0].user_id,
            subjectIdResult.rows[0].subject_id,
        ];

        const addCourse = await db.query(insertNewTableRowQuery, insertNewTableRowValues);

        res.send(addCourse.rows[0]);
    } catch (err) {
        res.send(err.message);
    }
};

exports.showAllCourses = async (req, res) => {
    const sqlquery = `SELECT * FROM courseslist `;
    try {
        const result = await db.query(sqlquery);
        res.send(result.rows);
    } catch (err) {
        res.status(401).send(err.message);
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const user_id = req.body.user_id;

        const subjectId_Query = `SELECT subject FROM subjects WHERE subject = $1;`;
        const subjectName_Values = [req.body.subject];
        const subjectIdResult = await db.query(subjectId_Query, subjectName_Values);

        const getLastUserId_Query = `SELECT user_id FROM courseslist WHERE name LIKE $1 ORDER BY course_id DESC LIMIT 1`;
        const getLastUserId_Values = [req.body.subject + "%"];
        const lastUser = await db.query(getLastUserId_Query, getLastUserId_Values);

        const deleteByTheId_Query = `DELETE FROM courseslist 
        WHERE user_id =(SELECT user_id FROM courseslist 
        WHERE name LIKE $1 ORDER BY course_id DESC LIMIT 1)`;
        const deleteByTheId_Values = [req.body.subject + "%"];
        const deleteByTheId = await db.query(deleteByTheId_Query, deleteByTheId_Values);

        const deleteTheLastUser_Query = `UPDATE courseslist
        SET user_id = ($1)
        WHERE user_id = $2`;
        const deleteTheLastUser_Values = [lastUser.rows[0].user_id, user_id];
        const deleteTheLastUser = await db.query(deleteTheLastUser_Query, deleteTheLastUser_Values);

        const checkCourseCount_Query =
            "SELECT user_id FROM courseslist WHERE name LIKE $1 ORDER BY course_id DESC LIMIT 1";
        const checkCourseCount_Values = [req.body.subject + "%"];
        const courseCount = await db.query(checkCourseCount_Query, checkCourseCount_Values);

        console.log("course count", courseCount.rows[0].user_id);
        console.log("subject id result", subjectIdResult.rows[0].subject);

        res.send("last user id " + courseCount.rows[0].user_id);
    } catch (error) {
        res.send(error.message);
    }
};
