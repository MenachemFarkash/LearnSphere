import "../Styles/personalArea.css";
import { useContext, useEffect, useState } from "react";
import { CoursesContext } from "./../Helpers/Context";
import Navbar from "./Navbar";
const PersonalArea = () => {
    const { showAllUserCourses, userCourses, deleteCourse, setCurrentPage } = useContext(CoursesContext);
    const [updating, setUpdating] = useState(false);

    function updateComponent() {
        setUpdating(true);
    }

    useEffect(() => {
        showAllUserCourses();
        setUpdating(false);
    }, [updating]);
    return (
        <>
            <Navbar />
            <div className="personalMainContainer">
                <div className="personalMain">
                    <h1>My On Going Courses</h1>
                    <div className="coursesList">
                        {userCourses.map((course) => {
                            return (
                                <div class="courseCard">
                                    <div class="card-details">
                                        <img src="https://via.placeholder.com/150" alt="" />
                                        <p class="text-title">{course.name}</p>
                                        <p class="text-body">Here are the details of the card</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            deleteCourse(course.name);
                                            updateComponent();
                                        }}
                                        class="card-button"
                                    >
                                        Leave Course
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="personalSider">
                    <div className="siderButtons">
                        <button onClick={() => showAllUserCourses()}>My Courses</button>
                        <button onClick={() => setCurrentPage("personalInfo")}>Personal Info</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalArea;
