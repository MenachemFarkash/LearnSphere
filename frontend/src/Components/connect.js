import { useContext, useState } from "react";
import { CoursesContext } from "../Helpers/Context";
import "../Styles/register.css";
import Register from "./register";
import Login from "./login";

const Connect = () => {
    const { currentPage } = useContext(CoursesContext);
    return (
        <>
            <div className="mainContainer">
                <div className="siderContainer">
                    <h1>A few clickes away form unleashing your creativity</h1>
                    <img src="/images/registerPhoto.png" />
                    <h2>
                        Choose form many courses avaliable for free in our site, every program language you
                        want to learn we have it.
                    </h2>
                </div>
                {currentPage === "register" ? <Register /> : ""}
                {currentPage === "login" ? <Login /> : ""}
            </div>
        </>
    );
};

export default Connect;
