import React from "react";
import { DiCodeigniter } from "react-icons/di";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="w-full h-screen bg-gray-100">
            {/* Navbar */}
            <div className="flex justify-center items-center py-4">
                <div className="flex justify-between items-center px-6 backdrop-blur-lg bg-white/30 shadow-lg rounded-full w-[450px] h-[80px]">
                    <Link
                        to="/"
                        className="text-4xl text-red-500 hover:text-red-700 transition duration-300"
                    >
                        <DiCodeigniter />
                    </Link>

                    <ul className="flex justify-between items-center gap-8">
                        <li>
                            <Link
                                to="/home"
                                className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition duration-300 relative group"
                            >
                                <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 bg-red-500 transition-transform origin-left duration-300 h-[2px] bottom-0"></span>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition duration-300 relative group"
                            >
                                <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 bg-red-500 transition-transform origin-left duration-300 h-[2px] bottom-0"></span>
                                LogOut
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Content */}
            <div className="flex items-center justify-center h-[500px]">
                <h1 className="text-5xl font-bold text-gray-900">
                    Welcome to the Home Page!
                </h1>
            </div>
        </div>
    );
};

export default Home;
