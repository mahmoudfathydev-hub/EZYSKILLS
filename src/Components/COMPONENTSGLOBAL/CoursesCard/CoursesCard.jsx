import React from 'react';
import buttons from "../../../images/buttons.png";
import './CoursesCard.scss';
import { Link } from 'react-router-dom';

export default function CoursesCard({ course }) {
    if (!course) return null;

    return (
        <Link to={`/course-info/${course.id}`} className="card-link-wrapper">
            <div className="card">
                <img className="card-img" src={course.img} alt={course.name} />
                <div className="card-content">
                    <h5>{course.name}</h5>
                    <p>{course.desc}</p>
                    <img className="btn-img" src={buttons} alt="buttons" />
                </div>
            </div>
        </Link>
    );
}