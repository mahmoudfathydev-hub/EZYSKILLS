import { coursesData } from "../../../data/CoursesData"; 
import CoursesCard from "../../COMPONENTSGLOBAL/CoursesCard/CoursesCard";
import "./PopoularCourses.scss";

export default function PopoularCourses() {
    
    const popularCourses = coursesData.slice(0, 4);

    return (
        <div className="popoular-curses">
            <div className="container">
                <div className="heading">
                    <p>
                        PoPular <span>Courses</span>
                    </p>
                </div>
                <div className="cards">
                    {popularCourses.map((course) => (
                        <CoursesCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}