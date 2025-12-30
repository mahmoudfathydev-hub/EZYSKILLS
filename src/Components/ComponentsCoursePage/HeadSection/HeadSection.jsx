import React from 'react';
import './HeadSection.scss';
import rectangle2 from '../../../images/Rectangle2.png';

export default function HeadSection({ course }) {
    if (!course) return null;

    return (
        <div className='head-section'>
            <div
                className='bg-overlay'
                style={{ backgroundImage: `url(${rectangle2})` }}
            >
            </div>
            <div className='container content-wrapper'>
                <div className='image-container'>
                    <img src={course.img} alt={course.name} className='course-img' />
                </div>
                <div className='text-container'>
                    <h1>{course.name}</h1>
                    <p className='level-text'>Basic to Advance <br /> Level Coding</p>
                </div>
            </div>
        </div>
    );
}
