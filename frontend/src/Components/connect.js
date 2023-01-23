import { useContext, useState } from "react";
import { CoursesContext } from "../Helpers/Context";
import "../Styles/register.css";
import Register from "./register";
import Login from "./login";

const Connect = () => {
    const { currentPage } = useContext(CoursesContext);
    return (
        <>
            {currentPage === "register" ? <Register /> : ""}
            {currentPage === "login" ? <Login /> : ""}
        </>
    );
};

export default Connect;
