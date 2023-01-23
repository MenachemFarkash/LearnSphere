import { useContext, useEffect } from "react";
import Register from "./Components/register";
import Navbar from "./Components/Navbar";
import Login from "./Components/login";
import Connect from "./Components/connect";
import { CoursesContext } from "./Helpers/Context";
import Main from "./Components/main";
import PersonalArea from "./Components/personalArea";
import PersonalInfo from "./Components/personalInfo";

function App() {
    const { currentPage, setCurrentPage, checkIfLoggedIn } = useContext(CoursesContext);

    useEffect(() => {
        checkIfLoggedIn(localStorage.getItem("token"));
    }, []);
    return (
        <>
            <div className="fakeBody">
                {currentPage === "personalInfo" ? <PersonalInfo /> : ""}
                {currentPage === "register" ? <Connect /> : ""}
                {currentPage === "login" ? <Connect /> : ""}
                {currentPage === "personalArea" ? <PersonalArea /> : ""}
                {currentPage === "main" ? (
                    <>
                        <Main />
                    </>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default App;
