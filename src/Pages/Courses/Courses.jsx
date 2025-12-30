import React, { useState, useMemo } from 'react';
import CoursesSection from '../../Components/ComponentsCursesPage/CoursesSection/CoursesSection';
import HeadingCoursesPage from '../../Components/ComponentsCursesPage/HeadingOfCoursesPage/HeadingCoursesPage';
import { coursesData } from '../../data/CoursesData';

export default function Courses() {
    
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("All");
    const [sortBy, setSortBy] = useState("Popular");

    
    
    const allCourses = useMemo(() => {
        return Array.from({ length: 100 }, (_, index) => {
            const baseCourse = coursesData[index % coursesData.length];

            
            const statuses = ["Opened", "Coming Soon", "Archived"];
            const status = statuses[Math.floor(Math.random() * statuses.length)];

            
            const popularity = Math.floor(Math.random() * 1000); 
            const duration = Math.floor(Math.random() * 50) + 1; 
            const sales = Math.floor(Math.random() * 5000); 

            return {
                ...baseCourse,
                id: index + 1,
                status,
                stats: {
                    popularity,
                    duration,
                    sales
                }
            };
        });
    }, []);

    
    const filteredCourses = useMemo(() => {
        let result = [...allCourses];

        
        if (activeTab !== "All") {
            
            
            result = result.filter(course => course.status === activeTab);
        }

        
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(course =>
                course.name.toLowerCase().includes(query) ||
                course.desc.toLowerCase().includes(query)
            );
        }

        
        switch (sortBy) {
            case "Popular":
                result.sort((a, b) => b.stats.popularity - a.stats.popularity);
                break;
            case "Duration":
                result.sort((a, b) => b.stats.duration - a.stats.duration); 
                break;
            case "Best Seller":
                result.sort((a, b) => b.stats.sales - a.stats.sales);
                break;
            default:
                break;
        }

        return result;
    }, [allCourses, activeTab, searchQuery, sortBy]);

    return (
        <div>
            <HeadingCoursesPage
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <CoursesSection courses={filteredCourses} />
        </div>
    );
}