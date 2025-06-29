import React, { useState, useEffect } from 'react';
// import AddCourseForm from './AddCourseForm'; // REMOVED: No longer needed

export const Curriculum = () => {
    // REMOVED: const [isAddCourseFormVisible, setIsAddCourseFormVisible] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState('200'); // Default level as per screenshot
    const [searchTerm, setSearchTerm] = useState('');
    const [courses, setCourses] = useState([]); // This will hold your course data
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 10; // As per the screenshot's pagination

    // Dummy data for demonstration purposes.
    // In a real application, you would fetch this from your backend API.
    useEffect(() => {
        const dummyData = Array.from({ length: 50 }, (_, i) => ({
            id: i + 1,
            courseCode: 'INS 201',
            courseTitle: 'Introduction to Information System',
            status: 3, // As seen in the screenshot
            // Add other properties if your actual courses have them, e.g., unit, level
        }));
        setCourses(dummyData);
    }, []);

    // --- Filtering and Pagination Logic ---
    const filteredCourses = courses.filter(course =>
        (course.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
         course.courseTitle.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedLevel === 'All' || course.courseCode.includes(selectedLevel)) // Simplified: assuming level is part of courseCode like 'INS 201' for '200' level
    );

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfFirstCourse + coursesPerPage);
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);


    // REMOVED: handleAddCourseClick, handleCloseAddCourseForm, handleSaveNewCourse


    return (
        <div className="flex h-screen bg-gray-100">
            {/* Main Content Area */}
            {/* REMOVED: Conditional margin for AddCourseForm visibility */}
            <div className={`flex-1 p-8 transition-all duration-300`}>
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Curriculum</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-green-600">Online</span>
                        {/* User Avatar - replace with your actual image source */}
                        <img src="https://via.placeholder.com/40" alt="User Avatar" className="rounded-full" />
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    {/* Filters and Add Course Button */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center space-x-4">
                            <label htmlFor="level" className="text-gray-700">Level:</label>
                            <select
                                id="level"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={selectedLevel}
                                onChange={(e) => setSelectedLevel(e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="300">300</option>
                                <option value="400">400</option>
                                <option value="500">500</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {/* Search Icon */}
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                            {/* REMOVED: Add Course Button and its onClick handler */}
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 flex items-center space-x-2"
                                // onClick={handleAddCourseClick} // REMOVED
                            >
                                {/* Plus Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                <span>Add Course</span>
                            </button>
                        </div>
                    </div>

                    {/* Course Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <input type="checkbox" className="form-checkbox" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Title</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currentCourses.map(course => (
                                    <tr key={course.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input type="checkbox" className="form-checkbox" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.courseCode}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.courseTitle}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.status}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center space-x-3">
                                                {/* View Icon */}
                                                <button className="text-indigo-600 hover:text-indigo-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                </button>
                                                {/* Delete Icon */}
                                                <button className="text-red-600 hover:text-red-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-6">
                        <div className="text-sm text-gray-700">
                            Rows per page:
                            {/* This select is static for now, but could be managed by state */}
                            <select
                                className="ml-2 border border-gray-300 rounded-md py-1 px-2"
                                value={coursesPerPage}
                                onChange={() => {}}
                            >
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-700">
                                {indexOfFirstCourse + 1}-{Math.min(indexOfLastCourse, filteredCourses.length)} of {filteredCourses.length}
                            </span>
                            <button
                                className="p-1 rounded-md hover:bg-gray-200 disabled:opacity-50"
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                            >
                                &lt;
                            </button>
                            <button
                                className="p-1 rounded-md hover:bg-gray-200 disabled:opacity-50"
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* REMOVED: Add Course Form Component */}
            {/* <AddCourseForm
                isVisible={isAddCourseFormVisible}
                onClose={handleCloseAddCourseForm}
                onSave={handleSaveNewCourse}
            /> */}
        </div>
    );
};