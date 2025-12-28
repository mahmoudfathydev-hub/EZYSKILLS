import React from "react";
import phtyon from "../../../images/phyton.png";
import Anglar from "../../../images/Anglar.png";
import AWS from "../../../images/AWS.png";
import CoreUI from "../../../images/CoreUI.png";
import PowerBI from "../../../images/PowerBI.png";
import test from "../../../images/test.png";
import VUE from "../../../images/Vue.png";
import REACT from "../../../images/React.png";
import buttons from "../../../images/buttons.png"
import "./PopoularCourses.scss";

export default function PopoularCourses() {
    const coursr = [
        {
            id: 1,
            name: "Phyton",
            img: phtyon,
            desc: "Python is an interpreted high-level general-purpose programming language. ",
        },
        {
            id: 2,
            name: "Anglar",
            img: Anglar,
            desc: "A JavaScript-based open-source front-end web framework for developing single-page. ",
        },
        {
            id: 3,
            name: "AWS",
            img: AWS,
            desc: "AWS Coaching and Certification helps you build and validate your skills so you can get more out of ",
        },
        {
            id: 4,
            name: "Core UI",
            img: CoreUI,
            desc: "Learn the fastest wayto build a modern dashboard for any platforms, browser, or device. ",
        },
        {
            id: 5,
            name: "Power BI",
            img: PowerBI,
            desc: "An interactive data visualization software developed by Microsoft with primary focus on business intelligence.",
        },
        {
            id: 6,
            name: "Test",
            img: test,
            desc: "The process of evaluating and verifying that a software product or application does what it is supposed to do.",
        },
        {
            id: 7,
            name: "VUE JS",
            img: VUE,
            desc: "An open-source model–view–viewmodel front end JavaScript framework for building user interfaces.",
        },
        {
            id: 8,
            name: "REACT",
            img: REACT,
            desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. ",
        },
    ];
    return (
        <div className="popoular-curses">
            <div className="container">
                <div className="heading">
                    <p>
                        PoPular <span>Courses</span>
                    </p>
                </div>
                <div className="cards">
                    {coursr.map((item) => (
                        <div key={item.id} className="card">
                            <img className="card-img" src={item.img} />

                            <div className="card-content">
                                <h5>{item.name}</h5>
                                <p>{item.desc}</p>
                                <img className="btn-img" src={buttons} alt="buttons" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
