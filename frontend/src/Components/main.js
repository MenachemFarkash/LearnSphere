import Navbar from "./Navbar";
import { useContext, useEffect } from "react";
import { CoursesContext } from "../Helpers/Context";
import CoursePreview from "./coursePreview";
const Main = () => {
    const { showAllCourses, showAllSubjects } = useContext(CoursesContext);

    return (
        <>
            <CoursePreview />
        </>
    );
};

export default Main;
