import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import './BackToTopButton.scss';

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <div className="back-to-top" onClick={scrollToTop}>
                    <IoIosArrowUp />
                </div>
            )}
        </>
    );
}