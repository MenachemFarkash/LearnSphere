import { createContext, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import App from "../App";
export const CoursesContext = createContext();
const ContextProvider = () => {
    const [currentPage, setCurrentPage] = useState("register");
    const [subjects, setSubjects] = useState([]);
    const [userCourses, setUserCourses] = useState([]);

    function checkIfLoggedIn() {
        const token = localStorage.getItem("token");
        token ? setCurrentPage("main") : setCurrentPage("login");
    }

    async function registerSubmit(ev, email, password, username) {
        ev.preventDefault();
        const data = await axios.post("http://localhost:4000/api/v1/user", {
            email,
            password,
            name: username,
        });
        localStorage.setItem("token", data.data);
        checkIfLoggedIn();
    }
    async function loginSubmit(ev, password, username) {
        ev.preventDefault();

        const login = await axios.post("http://localhost:4000/api/v1/user/login", {
            name: username,
            password: password,
        });
        console.log(password);
        localStorage.setItem("token", login.data);
        checkIfLoggedIn();
    }

    function logOut() {
        localStorage.removeItem("token");
        checkIfLoggedIn();
    }

    async function showAllCourses() {
        const { data } = await axios.get("http://localhost:4000/api/v1/courses");
        return data;
    }

    async function showAllUserCourses() {
        const token = localStorage.getItem("token");
        const courses = await axios.post("http://localhost:4000/api/v1/user/courses", {
            token: token,
        });
        console.log(courses.data);
        setUserCourses(courses.data);
    }

    async function showAllSubjects() {
        const subjects = await axios.get("http://localhost:4000/api/v1/subjects");
        try {
            setSubjects(subjects.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    async function deleteCourse(courseName) {
        const token = localStorage.getItem("token");
        const headers = {
            token: token,
            courseName: courseName,
        };
        const deleteRequest = await axios.delete("http://localhost:4000/api/v1/user", { headers });
        console.log(deleteRequest);
    }

    async function addCourse(subject) {
        const token = localStorage.getItem("token");
        const newCourse = await axios.post("http://localhost:4000/api/v1/courses", { token, subject });
        console.log(newCourse);
    }

    async function changePasswordSubmit(ev, email, password) {
        ev.preventDefault();

        const token = localStorage.getItem("token");

        const changePassword = await axios.post("http://localhost:4000/api/v1/user/changePassword", {
            email: email,
            password: password,
            token: token,
        });

        console.log(password);
        checkIfLoggedIn();
    }

    return (
        <CoursesContext.Provider
            value={{
                registerSubmit,
                loginSubmit,
                currentPage,
                setCurrentPage,
                checkIfLoggedIn,
                logOut,
                showAllCourses,
                showAllSubjects,
                subjects,
                showAllUserCourses,
                userCourses,
                deleteCourse,
                addCourse,
                changePasswordSubmit,
            }}
        >
            <App />
        </CoursesContext.Provider>
    );
};

export default ContextProvider;
