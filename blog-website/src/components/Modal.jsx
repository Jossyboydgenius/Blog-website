import React from 'react';

const Modal = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
            <div className='modal-overlay'>
                <div className='modal-container'>
                    <div className='bg-indigo-700 text-center p-5 h-95 lg:w-[500px] rounded shadow-md'>
                        {/* Modal content */}
                        <h2 className='text-xl font-semibold mb-4 mt-6 mb-5 uppercase '>Please Login Here!</h2>
                        <form className='px-4'>
                            {/* Email */}
                            <div className='mb-3'>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    className='w-full h-12 px-6 py-3 mb-3 transition duration-200 bg-white border border-gray-300 rounded focus:shadow-sm aspect-auto focus:border-[#6a64f1] focus:outline-none'
                                    style={{ color: 'black' }} // Set text color to black
                                />
                            </div>
                            {/* Password */}
                            <div className='mb-3'>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className='w-full h-12 px-6 py-3 mb-3 transition duration-200 bg-white border border-gray-300 rounded focus:shadow-sm aspect-auto focus:border-[#6a64f1] focus:outline-none'
                                    style={{ color: 'black' }} // Set text color to black
                                />
                            </div>
                            {/* Login button */}
                            <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-500 text-white px-6 py-2 font-medium mt-4'>Login</button>
                        </form>
                        {/* Modal close button */}
                        <button onClick={onClose} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-5'>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
