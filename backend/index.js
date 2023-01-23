const express = require("express");
const app = express();
const cors = require("cors");
const creatUserTable = require("./model/userSchema");
const creatCoursesTable = require("./model/coursesSchema");
app.use(cors());
const user = require("./routes/users");
const courses = require("./routes/courses");
const subjects = require("./routes/subjects");

creatUserTable();
creatCoursesTable();
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/user", user);
app.use("/api/v1/courses", courses);
app.use("/api/v1/subjects", subjects);

const port = process.env.PORT || 4000;

app.listen(port);
