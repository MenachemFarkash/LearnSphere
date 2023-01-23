const express = require("express");
const db = require("../model/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateUser = require("../model/userSchema");
const secretKey = "secretKey";

exports.adduser = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.datails[0].message);

    let query = `SELECT name FROM users WHERE email=$1 `;
    email = [req.body.email];
    let user = await db.query(query, email);
    console.log(user.rowCount);
    if (user.rowCount != 0) return res.status(400).send("user already exist");

    const sqlquery = `INSERT INTO users (name,email,password)
        VALUES($1,$2,$3) RETURNING*`;
    const values = [req.body.name, req.body.email, req.body.password];
    console.log(values);
    try {
        const salt = await bcrypt.genSalt(10);
        values[2] = await bcrypt.hash(values[2], salt);
        const result = await db.query(sqlquery, values);

        const token = jwt.sign(req.body.name, secretKey);
        console.log(token);
        res.header("x-auth-token", token).header("access-control-expose-header", "x-auth-token").send(token);
    } catch (err) {
        result = {};
        console.log(values);
        res.send(err.message);
    }
};

exports.login = async (req, res) => {
    const name = req.body.name;
    const InputPassword = req.body.password;
    try {
        const passwordResult_Query = `SELECT password FROM users
        WHERE name= $1`;
        const passwordResult_Values = [name];
        const passwordResult = await db.query(passwordResult_Query, passwordResult_Values);
        const password = passwordResult.rows[0].password;

        const passwordCorrect = await bcrypt.compare(InputPassword, password);

        if (passwordCorrect) {
            const token = jwt.sign(name, secretKey);
            res.header("x-auth-token", token)
                .header("access-control-expose-header", "x-auth-token")
                .send(token);
        } else {
            console.log("password is incorrect");
        }
    } catch (err) {
        console.log("something when wrong");
        res.send(err.message);
    }
};

exports.showAllUserCourses = async (req, res) => {
    const token = await req.body.token;
    const name = jwt.verify(token, secretKey);
    const getUserIdByName_Query = `SELECT user_id FROM users
    WHERE  name = $1;`;
    const getUserIdByName_Values = [name];
    const user_id = await db.query(getUserIdByName_Query, getUserIdByName_Values);

    const getUserCoursesById_Query = `SELECT * FROM courseslist
    WHERE user_id = $1`;
    const userCourses = await db.query(getUserCoursesById_Query, [user_id.rows[0].user_id]);

    res.send(userCourses.rows);
};

exports.showaUserById = async (req, res) => {
    const sqlquery = `SELECT * FROM users  WHERE user_id=${req.params.id}`;
    try {
        const result = await db.query(sqlquery);
        res.send(result.rows);
    } catch (err) {
        res.status(401).send(err.message);
    }
};

exports.showaUserByEmail = async (req, res) => {
    const sqlquery = `SELECT * FROM users  WHERE email=$1`;
    let email = [req.body.email];
    try {
        const result = await db.query(sqlquery, email);
        res.send(result.rows);
    } catch (err) {
        res.status(401).send(err.message);
    }
};

exports.deleteCourse = async (req, res) => {
    const token = req.headers.token;
    const courseName = req.headers.coursename;
    console.log(courseName);
    const name = jwt.verify(token, secretKey);

    const getUserIdByName_Query = `SELECT user_id FROM users
    WHERE  name = $1;`;
    const getUserIdByName_Values = [name];
    const user_id = await db.query(getUserIdByName_Query, getUserIdByName_Values);

    const deleteCourse_Query = `DELETE FROM courseslist
    WHERE name = $1 AND user_id = $2;`;
    const deleteCourse = await db.query(deleteCourse_Query, [courseName, user_id.rows[0].user_id]);

    res.send(deleteCourse);
};

exports.changePassword = async (req, res) => {
    const token = req.body.token;
    const name = jwt.verify(token, secretKey);

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const getUserIdByName_Query = `SELECT user_id FROM users
    WHERE  name = $1;`;
    const getUserIdByName_Values = [name];
    const user_idRequest = await db.query(getUserIdByName_Query, getUserIdByName_Values);
    const user_id = user_idRequest.rows[0].user_id;

    const changePassword_Query = `UPDATE users
    SET password = $1
    WHERE user_id = $2;`;
    const changePassword_Values = [password, user_id];
    const changePassword = await db.query(changePassword_Query, changePassword_Values);
};
