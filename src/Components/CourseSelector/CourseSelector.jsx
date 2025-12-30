import React from 'react'
import { Link } from 'react-router-dom'
import courseselectorimg from '../../images/corseselectorimg.png'
import './CourseSelector.scss'

export default function CourseSelector() {
    return (
        <div className='courseselector'>
            <div className="container">
                <div className="heading">
                    <p>Choose The <span>Course</span></p>
                </div>
                <div className="content">
                    <div className="optains">
                        <div className="text">
                            <h4>Ok, Let me help you</h4>
                        </div>
                        <div className="btns">
                            <button className='orange-btn'>
                                <Link to='/courses'>Discover Course</Link>
                            </button>
                            <button className='transparent-btn'>
                                <Link to='/chat'>Suggest Course</Link>
                            </button>
                        </div>
                    </div>
                    <div className="img">
                        <img src={courseselectorimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
