import "../Styles/navbar.css";
import { useContext, useEffect } from "react";
import { CoursesContext } from "../Helpers/Context";
const Navbar = () => {
    const { setCurrentPage, logOut } = useContext(CoursesContext);

    return (
        <>
            <div className="navbar">
                <img className="logo" src="/images/logo.png" alt="Logo" />
                <div className="navbarButtons">
                    <button onClick={() => setCurrentPage("main")} className="registerButton">
                        Our Courses
                    </button>
                    <button onClick={() => setCurrentPage("personalArea")} className="registerButton">
                        Personal Area
                    </button>
                    <button onClick={() => logOut()} className="registerButton">
                        LogOut
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
