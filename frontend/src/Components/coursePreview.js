import "../Styles/coursePreview.css";
import { useContext, useState, useEffect } from "react";
import { CoursesContext } from "../Helpers/Context";
import Navbar from "./Navbar";
const CoursePreview = () => {
    const { showAllSubjects, subjects, addCourse } = useContext(CoursesContext);

    useEffect(() => {
        showAllSubjects();
    }, []);
    return (
        <>
            <Navbar />

            <div className="subjectsContainer">
                {subjects.map((subject) => {
                    return (
                        <div id={subject.subject} className="middleContainer">
                            <h1 className="courseHeader">{subject.subject}</h1>
                            <div className="statsContainer">
                                {/* <div className="stats">
                                    <h1>
                                        Course Popularity: <span>{subject.rating}</span>
                                    </h1>
                                    <h1>
                                        Course Difficulty Level: <span>{subject.level}</span>
                                    </h1>
                                </div> */}
                            </div>
                            <h2>{subject.description}</h2>
                            <button onClick={() => addCourse(subject.subject)}>
                                Enroll {subject.subject} course
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default CoursePreview;
