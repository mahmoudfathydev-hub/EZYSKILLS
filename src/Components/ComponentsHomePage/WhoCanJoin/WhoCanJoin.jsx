import React from 'react'
import './WhoCanJoin.scss'
import colleges from '../../../images/colleges.png'
import person from '../../../images/person.png'
import Groupicons from '../../../images/startup.png'
import Corporates from '../../../images/Corporates.png'
import join from '../../../images/Join.png'
export default function WhoCanJoin() {
    const joining = [
        { id: 1, number: "01", name: "Colleges/Universities", image: colleges },
        { id: 2, number: "02", name: "Individuals/Working Professionals", image: person },
        { id: 3, number: "03", name: "Startups", image: Groupicons },
        { id: 4, number: "04", name: "Corporates", image: Corporates },
    ]
    return (
        <div className='Join-section'>
            <div className="container">
                <div className="heading">
                    <h3>WHO CAN JOIN</h3>
                </div>
                <div className="content">
                    <div className="text">
                        <div className="heading-text">
                            <h1>Skill Development Schemes For All</h1>
                        </div>
                        <div className="icons">
                            {
                                joining.map((item) => (
                                    <div key={item.id} className="icon">
                                        <span>{item.number}</span>
                                        <img src={item.image} />
                                        <p>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="img">
                        <img src={join} alt="join" />
                    </div>
                </div>
            </div>
        </div>
    )
}