import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import SideBar from '../components/SideBar';

const SingleBlog = () => {
    const data = useLoaderData();

    // Check if data is available and has at least one item
    if (!data || data.length === 0) {
        return <div>Loading...</div>; // or any other fallback UI 
    }

    const { title, author, published_date, image, content, category, reading_time } = data[0];

    return (
        <div>
            <div className='py-40 bg-black text-center text-white px-4'>
                <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
            </div>

            {/* Blog details */}
            <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
                <div className='lg:w-3/4 mx-auto'>
                    <div>
                        <img src={image} alt="" className='w-full mx-auto rounded' />
                    </div>
                    <h2 className='text-3xl font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                    <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center. mr-2' />{author} | {published_date} </p>
                    <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center. mr-2' />{reading_time} </p>
                    <p className='text-gray-500 text-base mb-6'>{content}</p>
                    <div className='text-gray-500 text-base mb-6'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sunt, dicta sequi dolores ea, ratione nihil tenetur unde blanditiis asperiores magni eveniet exercitationem temporibus odio debitis quod soluta doloremque aliquam..</p> <br />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nulla at labore, laborum blanditiis praesentium cum? Quo ut tempore animi nobis odit modi sequi quasi, laborum neque magnam ipsa officiis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti tempora quo vero quia neque modi quis quos, exercitationem debitis cupiditate repellendus accusamus dolores, distinctio autem labore eaque rerum maxime.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, dolores. Ipsam nostrum quisquam consequuntur possimus iste soluta asperiores sapiente, nulla aperiam neque fuga ipsum dolorum iusto hic aut sequi dolor.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sunt, dicta sequi dolores ea, ratione nihil tenetur unde blanditiis asperiores magni eveniet exercitationem temporibus odio debitis quod soluta doloremque aliquam..</p> <br />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nulla at labore, laborum blanditiis praesentium cum? Quo ut tempore animi nobis odit modi sequi quasi, laborum neque magnam ipsa officiis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti tempora quo vero quia neque modi quis quos, exercitationem debitis cupiditate repellendus accusamus dolores, distinctio autem labore eaque rerum maxime.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, dolores. Ipsam nostrum quisquam consequuntur possimus iste soluta asperiores sapiente, nulla aperiam neque fuga ipsum dolorum iusto hic aut sequi dolor.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sunt, dicta sequi dolores ea, ratione nihil tenetur unde blanditiis asperiores magni eveniet exercitationem temporibus odio debitis quod soluta doloremque aliquam..</p> <br />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nulla at labore, laborum blanditiis praesentium cum? Quo ut tempore animi nobis odit modi sequi quasi, laborum neque magnam ipsa officiis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti tempora quo vero quia neque modi quis quos, exercitationem debitis cupiditate repellendus accusamus dolores, distinctio autem labore eaque rerum maxime.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, dolores. Ipsam nostrum quisquam consequuntur possimus iste soluta asperiores sapiente, nulla aperiam neque fuga ipsum dolorum iusto hic aut sequi dolor.</p>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <SideBar />
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
