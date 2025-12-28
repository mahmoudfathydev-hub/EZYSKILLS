import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import male1 from "../../../images/male1.png";
import male2 from "../../../images/male2.png";
import female1 from "../../../images/female1.png";
import { IoStarSharp } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";
import prize from "../../../images/prize.png";
import study from "../../../images/study.png";
import documents from "../../../images/document.png"
import "./Trainers.scss";

export default function Trainers() {
    const trainer = [
        {
            id: 1,
            name: "Mahmoud Fathy",
            job: "Web Developer",
            reviews: "162 Reviews",
            image: male1,
            desc: "Mahmoud fathy is a Frontend devolper  who expertised in FrontEnd  for more than 24 years and training 100’s of students to accompolish their goals & dreams.",
            modules: "39 Modules",
            students: "1062 Students",
            Best: true
        },
        {
            id: 2,
            name: "Sudhansu",
            job: "Cloud & Cyber Security, Forensic",
            reviews: "38 Reviews",
            image: male2,
            desc: "Sudhansu is a Software Developer who expertised in Cloud security, Cyber Security, Data Center & Forensic for more than 22 years and training 100’s of students to accompolish their goals & dreams.",
            modules: "27 Modules",
            students: "682 Students"
        },
        {
            id: 3,
            name: "Ruchika Tuteja",
            job: "UIUX Trainer",
            reviews: "65 Reviews",
            image: female1,
            desc: "I have 9 years of experience in Fullstack development. Have worked on multiple projects on.  I can provide realtime simulation of these various development languages and framework by means of multiple projects. Can provide guidance...",
            modules: "44 Modules",
            students: "412 Students"
        },
    ];
    return (
        <div className="trainers">
            <div className="container">
                <div className="heading">
                    <h2 className="blue-text">Meet Our Professional</h2>
                    <h2 className="orange-text">Mentors & Trainers</h2>
                </div>
                <div className="swiper">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={2}
                        centeredSlides={false}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            0: { slidesPerView: 1 },   
                            768: { slidesPerView: 2 }, 
                            1024: { slidesPerView: 2 },
                        }}
                    >
                        {trainer.map((t) => (
                            <SwiperSlide key={t.id}>
                                <div className="trainer">
                                    {t.Best &&
                                        <div className="best">
                                            <img src={prize} alt="best" />
                                            <p>Best Trainer</p>
                                        </div>}
                                    <div className="top">
                                        <div className="img">
                                            <img src={t.image} alt={t.name} />
                                        </div>

                                        <div className="info">
                                            <h3>{t.name}</h3>
                                            <span className="job">{t.job}</span>

                                            <div className="rating">
                                                <div className="stars">
                                                    <IoStarSharp />
                                                    <IoStarSharp />
                                                    <IoStarSharp />
                                                    <IoStarSharp />
                                                    <FaStarHalfAlt />
                                                </div>
                                                <span className="reviews">{t.reviews}</span>
                                            </div>

                                            <ul className="meta">
                                                <li>
                                                    <img src={documents} alt="documents" />
                                                    {t.modules}
                                                </li>
                                                <li>
                                                    <img src={study} alt="study" />
                                                    {t.students}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="desc">{t.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                <div className="circle"></div>
            </div>
        </div>
    );
}
