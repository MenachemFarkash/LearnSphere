const db = require("./db");
const Joi = require("joi");
const creatUserTable = async () => {
    try {
        await db.query(`CREATE TABLE IF NOT EXISTS users 
    (user_id SERIAL PRIMARY KEY ,
    name VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$')
     )`);
    } catch (err) {
        console.log(err);
    }
};

function validateUser(user) {
    const schema = {
        name: Joi.string().min(2).max(50).required(),
        email: Joi.email().min(4).max(255).required(),
        password: Joi.string().min(5).max(255).required(),
    };
    return Joi.validate(user, schema);
}

module.exports = validateUser;
module.exports = creatUserTable;
