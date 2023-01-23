const db = require("./db");
const Joi = require("joi");
const creatCoursesTable = async () => {
    try {
        await db.query(`CREATE TABLE IF NOT EXISTS coursesList (
            course_id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            user_id INT REFERENCES users(user_id),
            subject_id INT REFERENCES subjects(subject_id)
        )`);
    } catch (err) {
        console.log(err);
    }
};

module.exports = creatCoursesTable;
