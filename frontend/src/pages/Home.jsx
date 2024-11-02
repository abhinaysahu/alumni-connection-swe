import React from 'react';
import Navbar from '../components/Navbar';
import GroupPic from "../assets/Group.png";

function Home() {
    return (
        <>
            <Navbar/>
            <div className="flex flex-grow h-full bg-gradient-to-b from-blue-50 to-blue-300 -mb-3">
                <div className=" mx-auto px-4 flex flex-col md:flex-row items-center">
                    {/* Text Section */}
                    <div className="text-center md:text-left md:w-1/2 ml-10">
                        <h1 className="text-4xl font-bold text-blue-900 mb-4">Connecting Alumni's</h1>
                        <p className="text-lg text-gray-600 font-semibold">
                            <span className="text-blue-900 font-bold">Alum Connect</span> is an integrated platform
                            that helps you connect to your friends, grow Socially and Professionally
                        </p>
                        <button className="mt-6 px-6 py-3 bg-blue-700  hover:bg-blue-500 text-white font-semibold rounded-full transition duration-300">
                            Join our Network
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2  md:mt-0 flex justify-center">
                        {/* Replace this div with an actual image component or image URL */}
                        <div className="w-3/4 h-3/4" >
                            <img src={GroupPic} alt="Group Photo"  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;