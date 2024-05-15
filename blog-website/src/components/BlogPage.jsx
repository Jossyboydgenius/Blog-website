import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // Number of blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:3000/blogs?page=${currentPage}&limit=${pageSize}`;

            // If a category is selected, filter the blogs by category
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setBlogs(data);
        }
        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])

    // Pagination handler
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
    return (
        <div>
            {/* Category Section */}
            <div>
                <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
            </div>

            {/* Blog Cards Section */}
            <div className='flex flex-col lg:flex-row gap-12'>
                {/* Blog Cards Component */}

                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

                {/* Side Bar Component */}
                <div>
                    <SideBar/>
                </div>
            </div>

            {/* Pagination Section */}
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
            </div>
        </div>
    )
}

export default BlogPage