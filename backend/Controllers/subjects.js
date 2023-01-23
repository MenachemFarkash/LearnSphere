const db = require("../model/db");

exports.showAllSubjects = async (req, res) => {
    const getAllSubjects = await db.query(`SELECT * FROM subjects`);
    return res.send(getAllSubjects.rows);
};
