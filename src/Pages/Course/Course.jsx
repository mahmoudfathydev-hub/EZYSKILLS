import React from 'react'
import HeadSection from '../../Components/ComponentsCoursePage/HeadSection/HeadSection'
import BottomSection from '../../Components/ComponentsCoursePage/BottomSection/BottomSection'
import MiddleSection from '../../Components/ComponentsCoursePage/MiddleSection/MiddleSection'
import { useParams } from 'react-router-dom'
import { coursesData } from '../../data/CoursesData'

export default function Course() {
    const { id } = useParams();
    const course = coursesData.find(c => c.id === parseInt(id));

    if (!course) {
        return <div style={{ padding: "5rem", textAlign: "center" }}>Course not found</div>
    }

    return (
        <div>
            <HeadSection course={course} />
            <MiddleSection course={course} />
            <BottomSection course={course} />
        </div>
    )
}
