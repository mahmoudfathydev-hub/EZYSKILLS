import React, { useState, useEffect, useRef } from 'react';
import CoursesCard from '../../COMPONENTSGLOBAL/CoursesCard/CoursesCard';
import './CursesSection.scss';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function CoursesSection({ courses }) {
    
    const totalCourses = courses ? courses.length : 0;
    const coursesPerPage = 8;
    const totalPages = Math.ceil(totalCourses / coursesPerPage);
    const containerRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);

    
    useEffect(() => {
        setCurrentPage(1);
    }, [courses]);

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = courses ? courses.slice(indexOfFirstCourse, indexOfLastCourse) : [];

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages || pageNumber === currentPage) return;

        setIsAnimating(true);
        setCurrentPage(pageNumber);

        if (containerRef.current) {
            const yOffset = -100;
            const element = containerRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }

        setTimeout(() => setIsAnimating(false), 500);
    };

    const renderPagination = () => {
        const pageNumbers = [];

        
        if (totalPages <= 10) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={currentPage === i ? 'active' : ''}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            
            const maxPagesToShow = 5;
            let startPage = Math.max(1, currentPage - 2);
            let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

            if (endPage - startPage < maxPagesToShow - 1) {
                startPage = Math.max(1, endPage - maxPagesToShow + 1);
            }

            
            pageNumbers.push(
                <button
                    key="prev"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="nav-btn"
                    aria-label="Previous Page"
                >
                    <IoIosArrowBack />
                </button>
            );

            if (startPage > 1) {
                pageNumbers.push(
                    <button key={1} onClick={() => handlePageChange(1)}>
                        1
                    </button>
                );
                if (startPage > 2) {
                    pageNumbers.push(<span key="dots1" className="pagination-dots">...</span>);
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={currentPage === i ? 'active' : ''}
                    >
                        {i}
                    </button>
                );
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageNumbers.push(<span key="dots2" className="pagination-dots">...</span>);
                }
                pageNumbers.push(
                    <button key={totalPages} onClick={() => handlePageChange(totalPages)}>
                        {totalPages}
                    </button>
                );
            }

            
            pageNumbers.push(
                <button
                    key="next"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="nav-btn"
                    aria-label="Next Page"
                >
                    <IoIosArrowForward />
                </button>
            );
        }

        return pageNumbers;
    };

    if (!courses || courses.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h3>No courses found matching your criteria.</h3>
            </div>
        );
    }

    return (
        <div ref={containerRef}>
            <div className="container">
                <div className={`cards ${isAnimating ? 'animating' : ''}`} key={currentPage}>
                    {currentCourses.map(course => (
                        <CoursesCard key={course.id} course={course} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="pagination">
                        {renderPagination()}
                    </div>
                )}
            </div>
        </div>
    );
}