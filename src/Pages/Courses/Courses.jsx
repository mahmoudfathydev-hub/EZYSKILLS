import React, { useState, useMemo } from 'react';
import CoursesSection from '../../Components/ComponentsCursesPage/CoursesSection/CoursesSection';
import HeadingCoursesPage from '../../Components/ComponentsCursesPage/HeadingOfCoursesPage/HeadingCoursesPage';
import { coursesData } from '../../data/CoursesData';

export default function Courses() {
    // 1. Centralized State
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("All");
    const [sortBy, setSortBy] = useState("Popular");

    // 2. Mock Data Generation (Memoized so it doesn't regenerate on every render)
    // In a real app, this would be fetched from an API
    const allCourses = useMemo(() => {
        return Array.from({ length: 100 }, (_, index) => {
            const baseCourse = coursesData[index % coursesData.length];

            // Randomly assign status and metrics for demonstration
            const statuses = ["Opened", "Coming Soon", "Archived"];
            const status = statuses[Math.floor(Math.random() * statuses.length)];

            // Random metrics
            const popularity = Math.floor(Math.random() * 1000); // 0-1000
            const duration = Math.floor(Math.random() * 50) + 1; // 1-50 hours
            const sales = Math.floor(Math.random() * 5000); // 0-5000 (Best Seller proxy)

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

    // 3. Filtering & Sorting Logic
    const filteredCourses = useMemo(() => {
        let result = [...allCourses];

        // Filter by Tab (Status)
        if (activeTab !== "All") {
            // Note: The mock data assigns random statuses. 
            // Ensure visual feedback helps user understand this.
            result = result.filter(course => course.status === activeTab);
        }

        // Filter by Search Query (Name or Description)
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(course =>
                course.name.toLowerCase().includes(query) ||
                course.desc.toLowerCase().includes(query)
            );
        }

        // Sort
        switch (sortBy) {
            case "Popular":
                result.sort((a, b) => b.stats.popularity - a.stats.popularity);
                break;
            case "Duration":
                result.sort((a, b) => b.stats.duration - a.stats.duration); // Longest first
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
