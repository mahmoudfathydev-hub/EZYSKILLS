import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './HeadingCoursesPage.scss';

export default function HeadingCoursesPage({
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    sortBy,
    setSortBy
}) {
    const tabs = [
        { id: 1, name: "All" },
        { id: 2, name: "Opened" },
        { id: 3, name: "Coming Soon" },
        { id: 4, name: "Archived" },
    ];

    // Local state for dropdown visibility
    const [isSortOpen, setIsSortOpen] = useState(false);

    const handleSortClick = (value) => {
        setSortBy(value);
        setIsSortOpen(false); // Close dropdown after selection
    };

    return (
        <div className='top-section'>
            <div className="container">
                <div className="head">
                    <p>Courses <span>List</span></p>
                </div>
                <div className="bottom">
                    <div className="sec1">
                        <div className="input-search-courses">
                            <input
                                type="text"
                                placeholder='Search The Course Here'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type='submit'><FaSearch /></button>
                        </div>
                    </div>
                    <div className="sec2">
                        <ul>
                            {tabs.map((item) => (
                                <li
                                    key={item.id}
                                    className={activeTab === item.name ? "active" : ""}
                                    onClick={() => setActiveTab(item.name)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sec3">
                        <div className="menu">
                            <div className="item" onMouseEnter={() => setIsSortOpen(true)} onMouseLeave={() => setIsSortOpen(false)}>
                                <a href="#" className="link" onClick={(e) => e.preventDefault()}>
                                    <span>Sort By: {sortBy}</span>
                                    <svg viewBox="0 0 360 360">
                                        <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150c5.858-5.858,5.858-15.356,0-21.214z" />
                                    </svg>
                                </a>
                                <div className="submenu" style={{ display: isSortOpen ? 'block' : 'none' }}> {/* controlled by hover but ensuring JS logic matches */}
                                    <div className="submenu-item">
                                        <a href="#" className="submenu-link" onClick={() => handleSortClick("Popular")}>Sort By: Popular</a>
                                    </div>
                                    <div className="submenu-item">
                                        <a href="#" className="submenu-link" onClick={() => handleSortClick("Duration")}>Sort By: Duration</a>
                                    </div>
                                    <div className="submenu-item">
                                        <a href="#" className="submenu-link" onClick={() => handleSortClick("Best Seller")}>Sort By: Best Seller</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
