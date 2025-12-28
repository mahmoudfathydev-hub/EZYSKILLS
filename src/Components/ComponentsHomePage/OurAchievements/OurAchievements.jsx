import React from 'react'
import './OurAchievements.scss'
import people from "../../../images/people.png"
import student from "../../../images/Student.png"
import book from "../../../images/book.png"
import circle from "../../../images/Circledottes.png"

export default function OurAchievements() {
    return (
        <div className='achievments'>
            <div className="container">
                <div className="heading">
                    <p>Our <span> Achievments</span></p>
                </div>
                <div className="content">
                    <div className="img">
                        <img src={people} alt="people" />
                    </div>
                    <div className="numbers">
                        <div className="top">
                            <div className="num1">
                                <p>+100</p>
                                <div className="icon-text">
                                    <img src={student} alt="student" />
                                    <h4>Students Trained</h4>
                                </div>
                            </div>
                            <div className="num2">
                                <p>+50</p>
                                <div className="icon-text">
                                    <img src={book} alt="book" />
                                    <h4>Courses Available</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <p>70%</p>
                            <h3>
                                Students Secured <br />
                                Jobs in Level 1 <br />
                                Companies
                            </h3>
                        </div>
                        <div className="img-dotted">
                            <img src={circle} alt="circle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
