import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from 'swiper/modules';
import img1 from "../../../images/Group 2225.png"
import img2 from "../../../images/Group 2226.png"
import img3 from "../../../images/Group 2227.png"
import img4 from "../../../images/Group 2228.png"
import "./AdsSection.scss"
import dotted from "../../../images/Dotted.png"
export default function AdsSection() {
    return (
        <div className="ads-section">
            <div className="container">
                <div className="bg-circle1"></div>
                <div className="bg-circle2"></div>
                <div className="text-section">
                    <h3 className='blue-text text'>World’s <br />
                        First AI Based
                    </h3>
                    <h3 className='orange-text text'>
                        Online Learning <br />
                        Platform
                    </h3>
                </div>
                <div className="swiper">
                    <Swiper spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper">
                        <SwiperSlide>
                            <img src={img1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img4} alt="" />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
            <div className="image-content">
                <img src={dotted} alt="" />
            </div>
        </div>
    )
}
